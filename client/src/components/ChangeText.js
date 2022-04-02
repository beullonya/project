import React, {useState} from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';

function ChangeText(props, csvData){

    const stringData = props;
    const parsingData = csvData;
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);

    // Pharsing CSV file


    // Change Text 
    const separator = /\n/;
    const dataStringLines = stringData.split(separator);
    const processComparing = () => {
        for(i=0; i<dataStringLines.length; i++) {

        }
    }
    

    return (
        <></>
    );
}