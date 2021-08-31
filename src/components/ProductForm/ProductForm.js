import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import { styled } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';

// material
import {
  Card,
  Stack,
  Link,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  FormControlLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// ----------------------------------------------------------------------
const useStyles = styled((theme) => ({
  root: {
    width: '80%',
    display: 'flex',
    padding: '10px 12px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));
const SectionStyle = styled(Card)(({ theme }) => ({
  alignItem: 'center',
  maxWidth: 1000,
  width: 600,
  padding: 50,
  marginLeft: 200,
  marginTop: 20
}));
export default function ProductForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate('/dashboard/app', { replace: true });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <SectionStyle>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3} direction="row" mt={2}>
              <Stack spacing={2} style={{ color: 'rgb(0, 171, 85)', width: 300 }}>
                Product Name:
              </Stack>
              <TextField
                fullWidth
                autoComplete="firstname"
                type="text"
                size="small"
                style={{ width: 470 }}
              />
            </Stack>

            <Stack>
              <Stack spacing={3} direction="row" mt={2}>
                <Stack spacing={3} style={{ color: 'rgb(0, 171, 85)', width: 300 }}>
                  Unit Of Measurement:
                </Stack>

                <TextField autoComplete="address" type="text" size="small" style={{ width: 470 }} />
              </Stack>
            </Stack>

            <Stack mt={2} spacing={3} direction="row">
              <Stack spacing={2} style={{ color: 'rgb(0, 171, 85)', width: 300 }}>
                Make:
              </Stack>
              <TextField
                fullWidth
                autoComplete="phnumber"
                type="number"
                size="small"
                style={{ width: 470 }}
              />
            </Stack>

            <Stack mt={2} spacing={3} direction="column">
              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                style={{ width: 220, marginLeft: 250 }}
              >
                Save
              </LoadingButton>
            </Stack>
          </Form>
        </FormikProvider>
      </SectionStyle>
    </>
  );
}
