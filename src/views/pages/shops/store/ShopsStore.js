import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../../config';

const path = 'shop';

export const getShops = createAsyncThunk('shops/getList', async () => {
    return (await axios.get(`${config.apiUrl}/${path}/list`)).data.data;
});

export const getShopDetail = createAsyncThunk('shops/getDetail', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/detail?id=${id}`)).data.data;
});

export const createOrUpdateShop = createAsyncThunk('shop/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`${config.apiUrl}/${path}/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`${config.apiUrl}/${path}/create`, data)).data.data;
    }
});

export const deleteShop = createAsyncThunk('${path}/delete', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/delete?id=${id}`)).data.data;
});
