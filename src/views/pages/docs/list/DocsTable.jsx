import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, ruRU } from '@mui/x-data-grid';
import { getDocs } from '../store/DocsStore';
import { useNavigate } from 'react-router-dom';
import { HelmTitle } from '../../../../components/cardHeader/HelmTitle';

const docsColumn = [
    {
        field: 'client',
        headerName: 'Клиент',
        sortable: true,
        flex: 1
    },
    {
        field: 'phone',
        headerName: 'Телефон',
        sortable: false,
        flex: 1
    }
];

function DocsTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.pages.docs);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getDocs()).then(() => setLoading(false));
    }, [dispatch]);

    const handleClick = (id) => {
        navigate(`/docs/${id}`);
    };

    return (
        <MainCard title={HelmTitle('Договоры', 'docs')}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={clients || []}
                    columns={docsColumn}
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

export default DocsTable;
