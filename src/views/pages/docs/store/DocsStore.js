import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../../config';

const path = 'doc';

export const getDocs = createAsyncThunk('docs/getList', async () => {
    return (await axios.get(`${config.apiUrl}/${path}/list`)).data;
});

export const getDocDetail = createAsyncThunk('docs/getDetail', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/detail?id=${id}`)).data;
});

export const createOrUpdateDoc = createAsyncThunk('docs/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`${config.apiUrl}/${path}/update?id=${id}`, data)).data;
    } else {
        return (await axios.post(`${config.apiUrl}/${path}/create`, data)).data;
    }
});

export const deleteDoc = createAsyncThunk('${path}/delete', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/delete?id=${id}`)).data;
});
