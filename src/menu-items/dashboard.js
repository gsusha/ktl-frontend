// assets
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Основное',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Главная',
            type: 'item',
            url: '/',
            icon: HomeRoundedIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
