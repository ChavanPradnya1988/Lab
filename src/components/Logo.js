import PropTypes from 'prop-types';
// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <Box
      component="img"
      src="/static/logo.jpg"
      sx={{ width: 120, height: 120, ...sx, borderRadius: '50%', border: '1px solid teal' }}
    />
  );
}
