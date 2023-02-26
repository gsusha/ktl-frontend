import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../../config';

const path = 'client';

export const getApps = createAsyncThunk('apps/getList', async () => {
    return (await axios.get(`${config.apiUrl}/${path}`)).data.data;
});

export const getAppDetail = createAsyncThunk('apps/getDetail', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/view?id=${id}`)).data.data;
});

export const createOrUpdateApp = createAsyncThunk('apps/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`${config.apiUrl}/${path}/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`${config.apiUrl}/${path}/create`, data)).data.data;
    }
});

export const deleteApp = createAsyncThunk('${path}/delete', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/delete?id=${id}`)).data.data;
});
