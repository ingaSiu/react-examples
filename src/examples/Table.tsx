// pernaudojamos lenteles pvz
// su children as a function ir render props examples

import { Table as MuiTable, TableRow as MuiTableRow, TableBody, TableCell, TableHead } from '@mui/material';

import TableRow from './TableRow';

// children yra funkcija, kuri grazina react node

interface TableProps {
  data: any[];
  columns: string[];
  children: (rowData: any, column: string) => React.ReactNode;
}

const EnhancedTable: React.FC<TableProps> = ({ data, columns, children }) => {
  return (
    <MuiTable>
      <TableHead>
        <MuiTableRow>
          {columns.map((column) => (
            <TableCell key={column}>{column}</TableCell>
          ))}
        </MuiTableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index} data={row} columns={columns}>
            {children}
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

export default EnhancedTable;
