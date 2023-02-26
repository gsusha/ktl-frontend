import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const manage = {
    id: 'manage',
    title: 'Управление',
    type: 'group',
    children: [
        {
            id: 'clients',
            title: 'Клиенты',
            type: 'item',
            url: '/clients',
            icon: PeopleAltRoundedIcon,
            breadcrumbs: false
        },
        {
            id: 'apps',
            title: 'Заявки',
            type: 'item',
            url: '/apps',
            icon: ManageAccountsRoundedIcon,
            breadcrumbs: false
        },
        {
            id: 'docs',
            title: 'Договоры',
            type: 'item',
            url: '/docs',
            icon: ArticleRoundedIcon,
            breadcrumbs: false
        },
        {
            id: 'shops',
            title: 'Магазины',
            type: 'item',
            url: '/shops',
            icon: StoreRoundedIcon,
            breadcrumbs: false
        },
        {
            id: 'boilers',
            title: 'Котлы',
            type: 'item',
            url: '/boilers',
            icon: LocalFireDepartmentRoundedIcon,
            breadcrumbs: false
        }
    ]
};

export default manage;
