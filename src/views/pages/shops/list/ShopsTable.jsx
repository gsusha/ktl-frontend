import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, ruRU } from '@mui/x-data-grid';
import { getShops } from '../store/ShopsStore';
import { useNavigate } from 'react-router-dom';
import { HelmTitle } from '../../../../components/cardHeader/HelmTitle';

const shopsColumn = [
    {
        field: 'name',
        headerName: 'Имя',
        sortable: true,
        flex: 1
    },
    {
        field: 'address',
        headerName: 'Адрес',
        sortable: false,
        flex: 1
    },
    {
        field: 'phone',
        headerName: 'Телефон',
        sortable: false,
        flex: 1
    },
    {
        field: 'boiler',
        headerName: 'Котёл',
        sortable: false,
        flex: 1
    },
    {
        field: 'doc',
        headerName: 'Договор',
        sortable: false,
        flex: 0
    }
];

function ShopsTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const shops = useSelector((state) => state.pages.shops);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getShops()).then(() => setLoading(false));
    }, [dispatch]);

    const handleClick = (id) => {
        navigate(`/shops/${id}`);
    };

    return (
        <MainCard title={HelmTitle('Магазины', 'shops')}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={shops || []}
                    columns={shopsColumn}
                    pageSize={5}
                    autoPageSize={true}
                    loading={loading}
                    disableColumnMenu={true}
                    disableSelectionOnClick={true}
                    onRowClick={(params) => handleClick(params.id)}
                    localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                />
            </div>
        </MainCard>
    );
}

export default ShopsTable;
