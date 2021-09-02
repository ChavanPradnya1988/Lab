import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import { styled } from '@material-ui/core/styles';
import plusFill from '@iconify/icons-eva/plus-fill';
// import { makeStyles } from '@material-ui/core/styles';

// material
import {
  Card,
  Grid,
  Stack,
  Button,
  TextField,
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

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
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
const SectionStyle = styled(Card)(({ theme }) => ({
  alignItem: 'center',
  maxWidth: 1000,
  width: 800,
  padding: 50,
  marginLeft: 100,
  marginTop: 20
}));
export default function ClientForm() {
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

      {/* <SectionStyle>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3} direction="row" mt={2}>
              <Stack spacing={2} direction="column">
                <Stack spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  First
                </Stack>
                <TextField
                  fullWidth
                  autoComplete="firstname"
                  type="text"
                  size="small"
                  id="firstName"
                />
              </Stack>
              <Stack spacing={2} direction="column">
                <Stack spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  Middle
                </Stack>
                <TextField
                  fullWidth
                  autoComplete="middlename"
                  type="text"
                  size="small"
                  id="middleName"
                />
              </Stack>
              <Stack spacing={2} direction="column">
                <Stack spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  Last
                </Stack>
                <TextField
                  fullWidth
                  autoComplete="lastname"
                  type="text"
                  size="small"
                  id="lastName"
                />
              </Stack>
            </Stack>
            <Stack>
              <Stack mt={2}>
                <Stack mt={2} spacing={3} style={{ color: 'rgb(0, 171, 85)' }}>
                  Email Id
                </Stack>
                <Stack mt={2} spacing={3}>
                  <TextField
                    autoComplete="emailId"
                    type="text"
                    size="small"
                    style={{ width: 470 }}
                    id="emailId"
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack mt={2} spacing={3} direction="row">
              <Stack spacing={3} direction="column">
                <Stack spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  Mobile Number
                </Stack>
                <TextField
                  fullWidth
                  autoComplete="mobilenumber"
                  type="number"
                  size="small"
                  id="mobileNumber"
                />
              </Stack>
              <Stack spacing={3} direction="column">
                <Stack spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  Hire Date
                </Stack>
                <TextField
                  fullWidth
                  autoComplete="hire date"
                  type="date"
                  size="small"
                  id="hireDate"
                />
              </Stack>
            </Stack>
            <Stack spacing={3} direction="row">
              <Stack spacing={2} direction="column">
                <Stack mt={2} spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  Role Id
                </Stack>
                <TextField fullWidth autoComplete="RoleId" type="text" size="small" id="roleId" />
              </Stack>
              <Stack spacing={2} direction="column">
                <Stack mt={2} spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  Adhar Card URL
                </Stack>
                <TextField
                  fullWidth
                  autoComplete="aadharURL"
                  type="text"
                  size="small"
                  id="aadharURL"
                />
              </Stack>
            </Stack>
            <Stack mt={2}>
              <Stack mt={2} spacing={3} style={{ color: 'rgb(0, 171, 85)' }}>
                Address
              </Stack>
              <Stack mt={2} spacing={3}>
                <TextField autoComplete="address" type="text" size="small" style={{ width: 470 }} />
              </Stack>
            </Stack>

            <Stack spacing={3} direction="row">
              <Stack spacing={3} direction="column">
                <Stack mt={2} spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  City
                </Stack>
                <TextField fullWidth autoComplete="city" type="text" size="small" id="cityId" />
              </Stack>
              <Stack spacing={3} direction="column">
                <Stack mt={2} spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  Employee Code
                </Stack>
                <TextField
                  fullWidth
                  autoComplete="employeeCode"
                  type="text"
                  size="small"
                  id="employeeCode"
                />
              </Stack>
            </Stack>
            <Stack spacing={3} direction="row">
              <Stack spacing={3} direction="column">
                <Stack mt={2} spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  User Name
                </Stack>
                <TextField
                  fullWidth
                  autoComplete="userName"
                  type="text"
                  size="small"
                  id="userName"
                />
              </Stack>
              <Stack spacing={3} direction="column">
                <Stack mt={2} spacing={2} style={{ color: 'rgb(0, 171, 85)' }}>
                  Password
                </Stack>
                <TextField
                  fullWidth
                  autoComplete="password"
                  type="text"
                  size="small"
                  id="password"
                />
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
      </SectionStyle> */}
      <SectionStyle>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={7}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="Company Name"
                    {...getFieldProps('name')}
                    size="small"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="number"
                    label="Mobile Number"
                    {...getFieldProps('mobileNumber')}
                    id="mobileNumber"
                    size="small"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={7}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="email"
                    label="Email Id"
                    size="small"
                    {...getFieldProps('emailId')}
                    id="emailId"
                  />
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="Fax Number"
                    size="small"
                    {...getFieldProps('faxNo')}
                    id="faxNo"
                  />
                </Paper>
              </Grid>
              <Grid item xs={11}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    size="small"
                    label="Address"
                    {...getFieldProps('address')}
                    id="address"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Paper>
              </Grid>

              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="Pan Number"
                    size="small"
                    {...getFieldProps('panNo')}
                    id="panNo"
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="GST Number"
                    size="small"
                    {...getFieldProps('gstinNo')}
                    id="gstinNo"
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="State Id"
                    size="small"
                    {...getFieldProps('stateId')}
                    id="stateId"
                  />
                </Paper>
              </Grid>
              <Divider className={classes.divider} />
              <Stack>
                <Stack mt={2} spacing={3} direction="column">
                  <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Contact Person</TableCell>
                          <TableCell size="small" align="center">
                            Client Id
                          </TableCell>
                          <TableCell align="center" size="small">
                            Name
                          </TableCell>
                          <TableCell align="center" size="small">
                            Address
                          </TableCell>
                          <Grid item xs={3}>
                            <TableCell align="center" size="small">
                              Email Id
                            </TableCell>
                          </Grid>
                          <TableCell align="center">Mobile Number</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>1</TableCell>
                          <TableCell align="right">
                            <TextField fullWidth size="small" />
                          </TableCell>
                          <TableCell align="right">
                            <TextField fullWidth size="small" />
                          </TableCell>
                          <TableCell align="right">
                            <TextField fullWidth size="small" />
                          </TableCell>
                          <TableCell align="right">
                            <TextField fullWidth size="small" />
                          </TableCell>
                          <TableCell align="right">
                            <TextField fullWidth size="small" />
                          </TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="right"
                justifyContent="space-between"
                mt={2}
                mb={5}
              >
                <Button
                  style={{
                    marginLeft: '35rem'
                  }}
                  variant="contained"
                  startIcon={<Icon icon={plusFill} />}
                >
                  Add New Client{' '}
                </Button>
              </Stack>
            </Grid>
          </Form>
        </FormikProvider>
      </SectionStyle>
    </>
  );
}
