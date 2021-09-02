// material
import { Box, Grid, Container, Typography, Breadcrumbs, Link } from '@material-ui/core';
// components
import { useState } from 'react';

import Page from '../components/Page';
import { EmployeeForm } from '../components/EmployeeForm';
// ----------------------------------------------------------------------

export default function CreateEmployee() {
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
  // const navigate = useNavigate();
  // const location = useLocation();
  // const pathnames = location.pathname.split('/').filter((x) => x);
  // function handleClick(event) {
  //   event.preventDefault();

  // console.info('You clicked a breadcrumb.');
  // }
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4"> Welcome ....</Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              color="inherit"
              // href="/dashboard/app"
              href="/dashboard/Employee"
              // component={RouterLink}
              // path="/dashboard/Employee"
              onClick={handleClick}
              // onClick={navigate('/dashboard/Employee', { replace: true })}
              style={{ textDecoration: 'none', color: '#00AB55' }}
            >
              Employee
            </Link>
            {/* {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/dashboard/${pathnames.slice(0, index + 1).join('/')}`;

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {value}
                </Typography>
              ) : (
                <Link color="inherit" component={RouterLink} to="/dashboard/" key={to}>
                  {value}
                </Link>
              );
            })} */}
            <Link
              color="inherit"
              href="#"
              onClick={handleClick}
              style={{ textDecoration: 'none', color: '#00AB55' }}
            >
              Create-Employee
            </Link>
          </Breadcrumbs>
          <EmployeeForm />
        </Box>
      </Container>
    </Page>
  );
}
