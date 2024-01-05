import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/rootReducer';
import { Provider, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import 'material-icons/iconfont/material-icons.css';
//import 'react-tooltip/dist/react-tooltip.css';
//import 'font-awesome/css/font-awesome.css';

const store = configureStore({ reducer: rootReducer });
const container = document.getElementById('app');
const root = createRoot(container!);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
