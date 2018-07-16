import React, { Component } from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { store } from './store';
import ToDo from './Todo' ;


import 'antd/dist/antd.css';

const MainLayout = ()=> (
  <Provider store={store}>
    <Layout>
      <Layout.Content>
        <ToDo/>
      </Layout.Content>
    </Layout>
  </Provider>
  );



export default MainLayout;
