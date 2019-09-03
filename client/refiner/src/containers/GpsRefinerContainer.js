import React from 'react';
import { useSelector } from 'react-redux';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [
    { dataField: 'id', text: 'ID' }, 
    { dataField: 'merchant', text: 'Merchant' }, 
    { dataField: 'store', text: 'Store' },
    { dataField: 'address', text: 'Address' },
    { dataField: 'latitude', text: 'Latitude' },
    { dataField: 'longitude', text: 'Longitude' },
    { dataField: '_tools', text: 'Tools' }
];

const GpsRefinerContainer = () => {
    const { datas } = useSelector(state => state.dataLoader, []);

    return (
        <div>
            <h1>GPS Refiner</h1>
            <BootstrapTable keyField="id" data={ datas } columns={ columns } />
        </div>
    );
};

export default GpsRefinerContainer;
