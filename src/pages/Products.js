import { useFormik } from 'formik';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material
import {
  Container,
  Stack,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  TableContainer
} from '@material-ui/core';
// components

import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  ProductFilterSidebar
} from '../components/_dashboard/products';
//
import PRODUCTS from '../_mocks_/products';
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);
  const [selected, setSelected] = useState([]);

  const formik = useFormik({
    initialValues: {
      gender: '',
      category: '',
      colors: '',
      priceRange: '',
      rating: ''
    },
    onSubmit: () => {
      setOpenFilter(false);
    }
  });

  const { resetForm, handleSubmit } = formik;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };

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
    <Page title="Dashboard: Machine Cutting Oil | Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>
        <Breadcrumbs aria-label="breadcrumb" style={{ alignItems: 'left !important' }}>
          <Link
            color="inherit"
            path="/dashboard/app"
            href="./Login"
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
            Client
          </Link>
          {/* <Link
              color="textPrimary"
              href="/components/breadcrumbs/"
              onClick={handleClick}
              aria-current="page"
            >
              Breadcrumb
            </Link> */}
        </Breadcrumbs>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              formik={formik}
              isOpenFilter={openFilter}
              onResetFilter={handleResetFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
          <Stack direction="row" alignItems="right" justifyContent="space-between" mb={5}>
            <Button
              style={{
                marginLeft: '50rem'
              }}
              variant="contained"
              component={RouterLink}
              startIcon={<Icon icon={plusFill} />}
              to="/dashboard/createproduct"
            >
              Add New Product{' '}
            </Button>
          </Stack>
        </Stack>

        {/* <ProductList products={PRODUCTS} />
        <ProductCartWidget /> */}
      </Container>
    </Page>
  );
}
