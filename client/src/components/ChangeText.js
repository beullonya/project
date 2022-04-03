import React, {useState} from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';

function ChangeText(props, csvData){

    const stringData = props;
    const parsingData = csvData;
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);

    // Pharsing CSV file
    const PharsingFunction =() => {
        const newLine = /\r\n|\n/;
        const comma = /,/;
        
        const separateLines = parsingData.split(newLine);
        const list = [];
        for(let i=0; i<separateLines.length; i++){
            const row = separateLines[i].split(comma);
            
        }


        return parsedText;
    }
    

    // Change Text 
    const separator = /\n/;
    const dataStringLines = stringData.split(separator);
    const processComparing = () => {
        for(let i=0; i<dataStringLines.length; i++) {
            for(let j=0; j<)
        }
    }
    

    return (
        <></>
    );
}