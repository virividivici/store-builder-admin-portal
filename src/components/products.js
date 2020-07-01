import * as React from "react";
import { 
    Filter,
    Create,
    List, 
    Edit,
    Datagrid, 
    SimpleForm,
    TextField, 
    NumberInput, 
    EditButton,
    TextInput,
    ReferenceInput,
    SelectInput } from 'react-admin';

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Product" source="id" reference="products" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const ProductList = props => (
    <List filters={<ProductFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField label="Product" source="title" />
            <TextField source="size" />
            <TextField label="Weight(KG)" source="weight" />
            <TextField label="Lead time" source="lead" />
            <TextField label="Base £/T" source="base" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);

const ProductTitle = ({ record }) => {
   return <span>{record ? `"${record.title}"` : ''}</span>;
};

export const ProductEdit = props => (
    <Edit title={<ProductTitle />} {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="title" />
          <TextInput multiline source="size" />
          <NumberInput source="weight" />
          <NumberInput source="leade" />
          <NumberInput source="base" />
          <TextInput source="status" />
          <SelectInput source="status" choices={[
                { name: 'Instock' },
                { name: 'Unavailable' }
            ]} />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source="title" />
          <TextInput multiline source="size" />
          <NumberInput source="weight" />
          <NumberInput source="leade" />
          <NumberInput source="base" />
          <TextInput source="status" />
          <SelectInput source="status" choices={[
                { name: 'Instock' },
                { name: 'Unavailable' }
            ]} />
        </SimpleForm>
    </Create>
);
