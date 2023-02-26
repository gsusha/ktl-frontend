// action - state management
import * as actionTypes from './actions';

export const initialState = {
    clients: [],
    apps: [],
    docs: [],
    shops: [],
    boilers: [],
    client: null,
    app: null,
    doc: null,
    shop: null,
    boiler: null
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        // Клиенты
        case actionTypes.GET_CLIENTS:
            return {
                clients: (state.clients = action.payload)
            };
        case actionTypes.GET_CLIENT:
            return {
                client: (state.client = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_CLIENT:
            return {
                client: (state.client = action.payload)
            };
        case actionTypes.DELETE_CLIENT:
            return {
                client: (state.client = action.payload)
            };
        //
        // Заявки
        case actionTypes.GET_APPS:
            return {
                apps: (state.apps = action.payload)
            };
        case actionTypes.GET_APP:
            return {
                app: (state.app = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_APP:
            return {
                app: (state.app = action.payload)
            };
        case actionTypes.DELETE_APP:
            return {
                app: (state.app = action.payload)
            };
        //
        // Договоры
        case actionTypes.GET_DOCS:
            return {
                docs: (state.docs = action.payload)
            };
        case actionTypes.GET_DOC:
            return {
                doc: (state.doc = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_DOC:
            return {
                doc: (state.doc = action.payload)
            };
        case actionTypes.DELETE_DOC:
            return {
                doc: (state.doc = action.payload)
            };
        //
        // Магазины
        case actionTypes.GET_SHOPS:
            return {
                shops: (state.shops = action.payload)
            };
        case actionTypes.GET_SHOP:
            return {
                shop: (state.shop = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_SHOP:
            return {
                shop: (state.shop = action.payload)
            };
        case actionTypes.DELETE_SHOP:
            return {
                shop: (state.shop = action.payload)
            };
        //
        // Котлы
        case actionTypes.GET_BOILERS:
            return {
                boilers: (state.boilers = action.payload)
            };
        case actionTypes.GET_BOILER:
            return {
                boiler: (state.boiler = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_BOILER:
            return {
                boiler: (state.boiler = action.payload)
            };
        case actionTypes.DELETE_BOILER:
            return {
                boiler: (state.boiler = action.payload)
            };
        default:
            return state;
    }
};

export default pageReducer;
