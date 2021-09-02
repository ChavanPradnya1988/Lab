// material
import { Box, Grid, Container, Typography, Breadcrumbs, Link } from '@material-ui/core';
// components
import { useState } from 'react';
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function Purchasehistory() {
  const [selected, setSelected] = useState([]);
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4"> Welcome ....</Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              color="inherit"
              href="#"
              onClick={handleClick}
              style={{ textDecoration: 'none', color: '#00AB55' }}
            >
              Purchase History
            </Link>
          </Breadcrumbs>
          {/* <FormikProvider value={formik}>
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
        </FormikProvider> */}
        </Box>
      </Container>
    </Page>
  );
}
