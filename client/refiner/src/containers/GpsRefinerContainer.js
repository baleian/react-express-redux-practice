import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import CSVFileLoader from '../components/CSVFileLoader'
import { setFiles, setConfig, load } from '../modules/CsvFileLoader';

const columns = [
    { dataField: 'id', text: 'ID' }, 
    { dataField: 'merchant', text: 'Merchant' }, 
    { dataField: 'store', text: 'Store' },
    { dataField: 'address', text: 'Address' },
    { dataField: 'latitude', text: 'Latitude' },
    { dataField: 'longitude', text: 'Longitude' },
    { dataField: '_tools', text: 'Tools' }
];

const cellEdit = cellEditFactory({
    mode: 'click',
    blurToSave: true
});

const GpsRefinerContainer = () => {
    const { datas } = useSelector(state => state.dataLoader, []);
    const { files, config } = useSelector(state => state.csvFileLoader, []);
    
    const dispatch = useDispatch();
    
    const onChangeFiles = useCallback((files) => { 
        dispatch(setFiles(files)); 
    }, [dispatch]);

    const onChangeConfig = useCallback((update) => { 
        dispatch(setConfig(update)); 
    }, [dispatch]);

    const onFileLoad = useCallback(() => {
        dispatch(load());
    }, [dispatch]);

    return (
        <div>
            <h1>GPS Refiner</h1>
            <CSVFileLoader 
                files={files} 
                config={config}
                onChangeFiles={onChangeFiles}
                onChangeConfig={onChangeConfig} 
                onFileLoad={onFileLoad}
            />
            <BootstrapTable 
                keyField="id" 
                data={datas} 
                columns={columns} 
                cellEdit={cellEdit}
            />
        </div>
    );
};

export default GpsRefinerContainer;
