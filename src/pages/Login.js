import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Card, Stack, Link, Container, Typography } from '@material-ui/core';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: theme.spacing(10, 0, 2, 2),
  padding: 20
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: '10',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login | Machine Cutting Oil">
      <Container maxWidth="sm">
        <ContentStyle>
          <LogoOnlyLayout />
          <SectionStyle>
            <Stack sx={{ mb: 5 }}>
              <Typography sx={{ color: '#00AB55' }} variant="h4" gutterBottom>
                <center>Sign In</center>
              </Typography>

              {/* <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography> */}
            </Stack>

            <LoginForm />
            <MHidden width="smUp">
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?&nbsp;
                <Link variant="subtitle2" component={RouterLink} to="register">
                  Get started
                </Link>
              </Typography>
            </MHidden>
          </SectionStyle>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
