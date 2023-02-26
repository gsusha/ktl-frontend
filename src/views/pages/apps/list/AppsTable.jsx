import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, ruRU } from '@mui/x-data-grid';
import { getApps } from '../store/AppsStore';
import { useNavigate } from 'react-router-dom';
import { HelmTitle } from '../../../../components/cardHeader/HelmTitle';

const appsColumn = [
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
    }
];

function AppsTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.pages.apps);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getApps()).then(() => setLoading(false));
    }, [dispatch]);

    const handleClick = (id) => {
        navigate(`/apps/${id}`);
    };

    return (
        <MainCard title={HelmTitle('Заявки', 'apps')}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={clients || []}
                    columns={appsColumn}
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

export default AppsTable;
