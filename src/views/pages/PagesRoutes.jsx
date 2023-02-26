import MainLayout from '../../layout/MainLayout';
import Loadable from '../../ui-component/Loadable';
import { lazy } from 'react';

const ProfilePage = Loadable(lazy(() => import('./profile/ProfilePage')));
const ClientsList = Loadable(lazy(() => import('./clients/list/ClientsTable')));

const PagesRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/profile',
            element: <ProfilePage />
        },
        {
            path: '/clients',
            element: <ClientsList />
        }
    ]
};

export default PagesRoutes;
