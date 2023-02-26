import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../../config';

const path = 'boiler';

export const getBoilers = createAsyncThunk('boilers/getList', async () => {
    return (await axios.get(`${config.apiUrl}/${path}/list`)).data.data;
});

export const getBoilerDetail = createAsyncThunk('boilers/getDetail', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/detail?id=${id}`)).data.data;
});

export const createOrUpdateBoiler = createAsyncThunk('boiler/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`${config.apiUrl}/${path}/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`${config.apiUrl}/${path}/create`, data)).data.data;
    }
});

export const deleteBoiler = createAsyncThunk('${path}/delete', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/delete?id=${id}`)).data.data;
});
