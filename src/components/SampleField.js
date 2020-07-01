import * as React from "react";

const SampleField = ({ record = {}, source }) =>
    <a href={record[source]}>
        {record[source]}
    </a>;

export default SampleField;