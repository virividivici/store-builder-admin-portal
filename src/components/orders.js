import * as React from "react";
import { 
    Filter,
    Create,
    List, 
    Edit,
    Datagrid, 
    SimpleForm,
    TextField, 
    ReferenceField, 
    EditButton,
    TextInput,
    DateField,
    NumberField,
    ReferenceInput,
    SelectInput } from 'react-admin';

const OrderFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Customer" source="userId" reference="customers" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const OrderList = props => (
    <List filters={<OrderFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField label="Order number"  source="id" />
            <DateField label="Placed"  source="date" showTime options={{ weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }} />

            <TextField label="Status"  source="status" />
            <NumberField
                source="total"
                options={{
                    style: 'currency',
                    currency: 'GBP',
                }}
            />
            <ReferenceField label="Buyer" source="userId" reference="customers">
               <TextField label="Buyer" source="name" />
            </ReferenceField>
            <ReferenceField label="Postcode" source="userId" reference="customers">
               <TextField source="address.zipcode" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

const OrderTitle = ({ record }) => {
   return <span>Order No. {record ? `${record.id}` : ''}</span>;
};

export const OrderEdit = props => (
    <Edit title={<OrderTitle />} {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
          <DateField disabled label="Placed"  source="date" showTime options={{ weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }} />

            <ReferenceInput source="userId" reference="customers">
             <SelectInput optionText="name" />
            </ReferenceInput>
           
            <TextInput label="Status"  source="status" />
            <NumberField
                source="total"
                options={{
                    style: 'currency',
                    currency: 'GBP',
                }}
            />
        </SimpleForm>
    </Edit>
);
