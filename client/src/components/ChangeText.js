import React, {useState} from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';

export default function ChangeText(props, csvData){

    const stringData = props;
    const parsingData = csvData;
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);

    // Pharsing CSV file
    const PharsingFunction =() => {
        const newLine = /\r\n|\n/;
        const comma = /,/;
        
        const separateLines = parsingData.split(newLine);
        const header = parsingData[0];

        const list = [];
        for(let i=0; i<separateLines.length; i++) {
            const row = separateLines[i].split(comma);
            if(header && row.length === header.length) {
                const obj = {};

                for(let j=0; j<3; j++){}


            // remove the blank rows
                if (Object.values(obj).filter(x => x).length > 0) {
                    list.push(obj);



            }

            

        }



        

        return ;
    }
    

    // Change Text 
    const separator = /\n/;
    const dataStringLines = stringData.split(separator);
    const processComparing = () => {
        for(let i=0; i<dataStringLines.length; i++) {
            for(let j=0; j<3; j++){}
        }
    }
    

    return (
        <></>
    );
}}