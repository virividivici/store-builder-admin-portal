import * as React from "react";
import { List, Datagrid, TextField, EmailField, TextInput, ReferenceInput, SelectInput, Filter } from 'react-admin';
import SampleField from './SampleField';

const CustomerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Customer" source="id" reference="customers" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const CustomerList = props => (
    <List filters={<CustomerFilter />}  {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <SampleField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);
