import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Client from './pages/Client';
import User from './pages/User';
import NotFound from './pages/Page404';
import CreateEmployee from './pages/CreateEmployee';
import CreateUser from './pages/CreateUser';
import CreateProduct from './pages/CreateProduct';
import PurchaseHistory from './pages/PurchaseHistory';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'purchasehistory', element: <PurchaseHistory /> },
        { path: 'client', element: <Client /> },
        { path: 'createemployee', element: <CreateEmployee /> },
        { path: 'createuser', element: <CreateUser /> },
        { path: 'createproduct', element: <CreateProduct /> }
        // { path: 'createproduct', element: <CreateProduct /> }
      ]
    },
    {
      path: '/',
      // element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
