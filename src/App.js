import React from 'react';
import { Admin, Resource , EditGuesser} from 'react-admin';
import { CustomerList } from './components/customers';
import { OrderList, OrderEdit } from './components/orders';
import { ProductList, ProductEdit, ProductCreate } from './components/products';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
//import dataProvider from './providers/dataProvider';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/virividivici/admin-data');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="orders" list={OrderList} edit={OrderEdit} />
    <Resource name="customers" list={CustomerList} edit={EditGuesser}  icon={UserIcon} />
    <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={PostIcon} />
  </Admin>
);

export default App;