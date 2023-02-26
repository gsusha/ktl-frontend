import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, ruRU } from '@mui/x-data-grid';
import { getBoilers } from '../store/BoilersStore';
import { useNavigate } from 'react-router-dom';
import { HelmTitle } from '../../../../components/cardHeader/HelmTitle';

const boilersColumn = [
    {
        field: 'brand',
        headerName: 'Название',
        sortable: true,
        flex: 1
    },
    {
        field: 'certificate',
        headerName: 'Сертификат',
        sortable: true,
        flex: 0
    }
];

function BoilersTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const boilers = useSelector((state) => state.pages.boilers);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getBoilers()).then(() => setLoading(false));
    }, [dispatch]);

    const handleClick = (id) => {
        navigate(`/boilers/${id}`);
    };

    return (
        <MainCard title={HelmTitle('Клиенты', 'boilers')}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={boilers || []}
                    columns={boilersColumn}
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

export default BoilersTable;
