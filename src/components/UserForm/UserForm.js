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
export default function EmployeeForm() {
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
      {/* <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow style={{ width: '500rem !important' }}>
                      <TableCell>
                        <TableCell align="center">First Name:</TableCell>
                        <TextField fullWidth autoComplete="firstname" type="text" size="small" />
                      </TableCell>
                      <TableCell style={{ width: '500rem !important' }}>
                        <TableCell align="center">Last Name:</TableCell>
                        <TextField fullWidth autoComplete="lastname" type="text" size="small" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ width: '500rem !important' }}>
                        <TableCell align="center">Address:</TableCell>
                        <TextField fullWidth autoComplete="Address" type="text" size="small" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <TableCell align="center">Phone Number:</TableCell>
                        <TextField
                          fullWidth
                          autoComplete="phonenumber"
                          type="number"
                          size="small"
                        />
                      </TableCell>

                      <TableCell style={{ width: '500rem !important' }}>
                        <TableCell align="center">Photo:</TableCell>
                        <TextField fullWidth autoComplete="photo" type="photo" size="small" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ width: '500rem !important' }}>
                        <TableCell align="center">Email id:</TableCell>
                        <TextField fullWidth autoComplete="email" type="email" size="small" />
                      </TableCell>
                      <TableCell>
                        <TableCell align="center">Adhar Card :</TableCell>
                        <TextField fullWidth autoComplete="adharcard" type="photo" size="small" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ width: '500rem !important' }}>
                        <TableCell align="center">City:</TableCell>
                        <TextField fullWidth autoComplete="City" type="text" size="small" />
                      </TableCell>
                      <TableCell>
                        <TableCell align="center">State:</TableCell>
                        <TextField fullWidth autoComplete="State" type="text" size="small" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center" size="small">
                        User Name :
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth autoComplete="User Name" type="text" size="small" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Password :</TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          size="small"
                          autoComplete="current-password"
                          type={showPassword ? 'text' : 'password'}
                          {...getFieldProps('password')}
                          error={Boolean(touched.password && errors.password)}
                          helperText={touched.password && errors.password}
                        />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>

              <center>
                <LoadingButton
                  padding="2rem !important"
                  Width="100px"
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                >
                  Save
                </LoadingButton>
              </center>
            </Form>
          </FormikProvider> */}

      <SectionStyle>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3} direction="row" mt={2}>
              <Stack spacing={2} direction="column">
                <Stack spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  First Name
                </Stack>
                <TextField fullWidth autoComplete="firstname" type="text" size="small" />
              </Stack>
              <Stack spacing={2} direction="column">
                <Stack spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  Last Name
                </Stack>
                <TextField fullWidth autoComplete="lastname" type="text" size="small" />
              </Stack>
            </Stack>
            <Stack>
              <Stack mt={2}>
                <Stack mt={2} spacing={3} style={{ color: 'rgb(0, 171, 85)' }}>
                  Address
                </Stack>
                <Stack mt={2} spacing={3}>
                  <TextField
                    autoComplete="address"
                    type="text"
                    size="small"
                    style={{ width: 470 }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack mt={2} spacing={3} direction="row">
              <Stack spacing={3} direction="column">
                <Stack spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  Phone Number
                </Stack>
                <TextField fullWidth autoComplete="phnumber" type="number" size="small" />
              </Stack>
              <Stack spacing={3} direction="column">
                <Stack spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  Photo
                </Stack>
                <TextField fullWidth autoComplete="photo" type="photo" size="small" />
              </Stack>
            </Stack>
            <Stack spacing={3} direction="row">
              <Stack spacing={3} direction="column">
                <Stack mt={2} spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  City
                </Stack>
                <TextField fullWidth autoComplete="city" type="text" size="small" />
              </Stack>
              <Stack spacing={3} direction="column">
                <Stack mt={2} spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  State
                </Stack>
                <TextField fullWidth autoComplete="state" type="state" size="small" />
              </Stack>
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
