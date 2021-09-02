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
import Employee from './pages/Employee';
import NotFound from './pages/Page404';
import CreateEmployee from './pages/CreateEmployee';
import CreateClient from './pages/CreateClient';
import CreateProduct from './pages/CreateProduct';
import PurchaseHistory from './pages/PurchaseHistory';
import UpdateEmployee from './pages/UpdateEmployee';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'employee', element: <Employee /> },
        { path: 'products', element: <Products /> },
        { path: 'purchasehistory', element: <PurchaseHistory /> },
        { path: 'client', element: <Client /> },
        { path: 'createemployee', element: <CreateEmployee /> },
        { path: 'createclient', element: <CreateClient /> },
        { path: 'createproduct', element: <CreateProduct /> },
        { path: 'updateemployee', element: <UpdateEmployee /> }

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
