import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider, withFormik } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import axios from 'axios';
import { bindActionCreators, connect, useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';

// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { loginFormDataActions } from '../../../utils/state/login/stateLogin';
// import { AccountContext } from './context';
// ----------------------------------------------------------------------

// const API_URL = 'http://178.18.250.76:85/api/';
// const API_URL = 'https://localhost:44377/api/identity/authenticate';
export default function LoginForm(props) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  // email
  // const email1 = useSelector((state) => state.loginFormData.credentials.email);
  const email1 = useSelector((state) => {
    console.log(state);
  });
  const [email, setEmail] = useState(email1);
  useEffect(() => setEmail(email1), [email1]);

  // password
  // const password1 = useSelector((state) => state.loginFormData.credentials.password);
  const password1 = useSelector((state) => console.log(state));
  const [password, setPassword] = useState(password1);
  useEffect(() => setPassword(password1), [password1]);

  // const { switchToSignup } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // userDetails
  // const userData1 = useSelector((state) => state.loginFormData.userData);
  const userData1 = useSelector((state) => console.log(state));
  const [userData, setUserData] = useState(userData1);
  useEffect(() => setUserData(userData1), [userData1]);
  console.log(userData1);

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios
      .post('https://localhost:44377/api/identity/authenticate', values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
      });
    if (response) {
      navigate('/dashboard/app', { replace: true });
    }
  };
  const handleChange = (e) =>
    dispatch(loginFormDataActions.handleLoginFormData(e.target.name, e.target.value));
  const LoginSchema = Yup.object().shape({
    // email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    // password: Yup.string().required('Password is required')
    email: Yup.string().email().required('Enter valid email-id')
    // fullName: Yup.string().required('Please enter full name'),
    // password: Yup.string()
    //   .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/)
    //   .required(
    //     'Please valid password. One uppercase, one lowercase, one special character and no spaces'
    //   )
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    validateOnBlur: true,
    onSubmit
    // handleChange
    //   // validationSchema: loginUser,
    //   //   onSubmit: () => {
    //   //     navigate('/dashboard/app', { replace: true });
    //   //   }
    //   // });
    //   onSubmit: axios
    //     .post(API_URL, {
    //       email,
    //       password
    //     })
    //     .then((response) => {
    //       if (response.data.accessToken) {
    //         localStorage.setItem('user', JSON.stringify(response.data));
    //       }

    //       return response.data;
    //     })
    //   // navigate('dashboard/app', { replace: true });
  });

  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleBlur,
    // handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    getFieldProps
  } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            name="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextField
            fullWidth
            // autoComplete="current-password"
            // value={password}
            name="password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={
              errors.password && touched.password
                ? 'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                : 'One uppercase, one lowercase, one special character and no spaces'
            }
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link
            component={RouterLink}
            style={{ textDecoration: 'none' }}
            variant="subtitle2"
            to="#"
          >
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          disabled={!formik.isValid}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
