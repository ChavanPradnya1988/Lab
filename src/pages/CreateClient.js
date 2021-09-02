// material
import { Box, Grid, Container, Breadcrumbs, Link } from '@material-ui/core';
// components
// import { sidebarConfig } from '../layouts/dashboard/SidebarConfig';
import { useState } from 'react';
import Page from '../components/Page';
import { ClientForm } from '../components/ClientForm';
// import { Route } from 'react-router-dom'

// ----------------------------------------------------------------------
// const path = [...sidebarConfig];
export default function CreateClient() {
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
        <Box sx={{ pb: 5 }} style={{ padding: '50 !important' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/dashboard/Client"
              onClick={handleClick}
              style={{ textDecoration: 'none', color: '#00AB55' }}
            >
              {/* <Route exact path="/login" /> */}
              Clients
            </Link>
            <Link
              color="inherit"
              // to={path}
              href="#"
              onClick={handleClick}
              style={{ textDecoration: 'none', color: '#00AB55' }}
            >
              CreateClient
            </Link>
          </Breadcrumbs>

          <ClientForm />
        </Box>
      </Container>
    </Page>
  );
}
