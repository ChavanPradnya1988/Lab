// import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import { styled } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';

// material
import {
  Card,
  Grid,
  Select,
  Checkbox,
  TextField,
  Button,
  InputLabel,
  Typography,
  FormControl
} from '@material-ui/core';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker
// } from '@material-ui/pickers';

import { LoadingButton } from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';

// ----------------------------------------------------------------------
const useStyles = styled((theme) => ({
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
export default function UpdateEmployeeForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const [title, settitle] = useState('');

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

  return (
    <>
      <SectionStyle>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {/* <Stack spacing={3} direction="row" mt={2}>
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
            </Stack> */}
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Title</InputLabel>
                    <Select
                      native
                      value={title}
                      size="small"
                      {...getFieldProps('title')}
                      // onChange={handleChange}
                      inputProps={{
                        name: 'title',
                        id: 'title-native-simple'
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option>Mr.</option>
                      <option>mrs</option>
                      <option>Miss</option>
                    </Select>
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="First Name"
                    {...getFieldProps('firstname')}
                    size="small"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="Middle Name"
                    {...getFieldProps('middlename')}
                    id="middlename"
                    size="small"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="Last Name"
                    {...getFieldProps('lastname')}
                    id="lastname"
                    size="small"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="email"
                    size="small"
                    label="Email Id"
                    {...getFieldProps('emailId')}
                    id="emailId"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={3}>
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
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    label="Hire Date"
                    defaultValue=""
                    autoComplete="hire date"
                    type="date"
                    InputLabelProps={{
                      shrink: true
                    }}
                    size="small"
                    id="hireDate"
                  />
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="Roll Id"
                    size="small"
                    {...getFieldProps('rollId')}
                    id="roleId"
                  />
                </Paper>
              </Grid>
              <Grid item xs={11}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    defaultValue=""
                    label="Choose Aadhar card document for upload"
                    size="small"
                    {...getFieldProps('adharurl')}
                    InputLabelProps={{
                      shrink: true
                    }}
                    id="aadharURL"
                  />
                </Paper>
              </Grid>
              <Grid item xs={11}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="address"
                    label="Address"
                    size="small"
                    {...getFieldProps('address')}
                    id="address"
                  />
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="City"
                    size="small"
                    {...getFieldProps('cityId')}
                    id="cityId"
                  />
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="Employee Code"
                    size="small"
                    {...getFieldProps('employeeCode')}
                    id="employeeCode"
                  />
                </Paper>
              </Grid>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"

                    label="Photo Path"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    InputLabelProps={{
                      shrink: true
                    }}
                    size="small"
                    {...getFieldProps('Photo Path')}
                    id="photoPath"
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="text"
                    label="User Name"
                    size="small"
                    {...getFieldProps('userName')}
                    id="userName"
                  />
                </Paper>
              </Grid>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    // autoComplete="username"
                    type="password"
                    label="Password"
                    size="small"
                    {...getFieldProps('password')}
                    id="password"
                  />
                </Paper>
              </Grid>
            </Grid>
            {/* <Divider className={classes.divider} />
            <Typography variant="subtitle1" gutterBottom>
              CSS Grid Layout:
            </Typography>
            <div className={classes.container}>
              <div style={{ gridColumnEnd: 'span 3' }}>
                <Paper className={classes.paper}>xs=3</Paper>
              </div>
              <div style={{ gridColumnEnd: 'span 3' }}>
                <Paper className={classes.paper}>xs=3</Paper>
              </div>
              <div style={{ gridColumnEnd: 'span 3' }}>
                <Paper className={classes.paper}>xs=3</Paper>
              </div>
              <div style={{ gridColumnEnd: 'span 3' }}>
                <Paper className={classes.paper}>xs=3</Paper>
              </div>
              <div style={{ gridColumnEnd: 'span 8' }}>
                <Paper className={classes.paper}>xs=8</Paper>
              </div>
              <div style={{ gridColumnEnd: 'span 4' }}>
                <Paper className={classes.paper}>xs=4</Paper>
              </div>
            </div> */}
            <Grid direction="row" alignItems="right" justifyContent="flex-end" mt={3} mb={5}>
              <Button
                style={{
                  marginLeft: '36rem'
                }}
                variant="contained"
                // component={RouterLink}
                // startIcon={<Icon icon={plusFill} />}
                // to="/dashboard/createemployee"
              >
                Save{' '}
              </Button>
            </Grid>
          </Form>
        </FormikProvider>
      </SectionStyle>
    </>
  );
}
