// material
import { Box, Grid, Container, Typography, Breadcrumbs, Link } from '@material-ui/core';
// components
import Page from '../components/Page';
import { ProductForm } from '../components/ProductForm';
// ----------------------------------------------------------------------

export default function CreateProduct() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }} style={{ padding: '50 !important' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/Login"
              onClick={handleClick}
              style={{ textDecoration: 'none', color: '#00AB55' }}
            >
              Login
            </Link>
            <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={handleClick}
              style={{ textDecoration: 'none', color: '#00AB55' }}
            >
              CreateProduct
            </Link>
          </Breadcrumbs>

          <ProductForm />
        </Box>
      </Container>
    </Page>
  );
}
