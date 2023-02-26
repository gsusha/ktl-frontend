import MainLayout from '../../layout/MainLayout';
import Loadable from '../../ui-component/Loadable';
import { lazy } from 'react';

const ProfilePage = Loadable(lazy(() => import('./profile/ProfilePage')));
const ClientsList = Loadable(lazy(() => import('./clients/list/ClientsTable')));
const AppsList = Loadable(lazy(() => import('./apps/list/AppsTable')));
const DocsList = Loadable(lazy(() => import('./docs/list/DocsTable')));
const ShopsList = Loadable(lazy(() => import('./shops/list/ShopsTable')));
const BoilersList = Loadable(lazy(() => import('./boilers/list/BoilersTable')));

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
        },
        {
            path: '/apps',
            element: <AppsList />
        },
        {
            path: '/docs',
            element: <DocsList />
        },
        {
            path: '/shops',
            element: <ShopsList />
        },
        {
            path: '/boilers',
            element: <BoilersList />
        }
    ]
};

export default PagesRoutes;
