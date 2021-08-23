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
    display: 'flex',
    padding: '10px 12px',

    flexDirection: 'row'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '50ch'
  }
}));
const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 1000,
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(10, 2, 2, 2),
  padding: 20
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
    <SectionStyle>
      <div>
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
            <Stack>
              <Stack mt={2} spacing={3} direction="column">
                <TableContainer component={Paper}>
                  <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ color: 'rgb(0, 171, 85)' }}>Contact Person</TableCell>
                        <TableCell align="center" style={{ color: 'rgb(0, 171, 85)' }}>
                          Name
                        </TableCell>
                        <TableCell align="center" style={{ color: 'rgb(0, 171, 85)' }}>
                          Email
                        </TableCell>
                        <TableCell align="center" style={{ color: 'rgb(0, 171, 85)' }}>
                          Ph. No.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ color: 'rgb(0, 171, 85)' }}>1</TableCell>
                        <TableCell align="right">
                          <TextField fullWidth />
                        </TableCell>
                        <TableCell align="right">
                          <TextField fullWidth />
                        </TableCell>
                        <TableCell align="right">
                          <TextField fullWidth />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ color: 'rgb(0, 171, 85)' }}>2</TableCell>
                        <TableCell align="right">
                          <TextField fullWidth />
                        </TableCell>
                        <TableCell align="right">
                          <TextField fullWidth />
                        </TableCell>
                        <TableCell align="right">
                          <TextField fullWidth />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
              </Stack>
            </Stack>
            <Stack mt={2} spacing={3} direction="column">
              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                style={{ width: 220, marginLeft: 650 }}
              >
                Save
              </LoadingButton>
            </Stack>
          </Form>
        </FormikProvider>
      </div>
    </SectionStyle>
  );
}
