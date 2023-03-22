import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import EnhancedTable from './Table';

const Examples = () => {
  // Formikas naudoja children as a function

  const array = [{ name: 'Rokas', surname: 'Andreikenas' }];
  const logs = [
    {
      date: '2022',
      title: (
        <div>
          <Button>Delete</Button>"Deleted user"
        </div>
      ),
      by: 'Rokas',
    },
  ];

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.surname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>by</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((item) => (
            <TableRow key={item.date}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.by}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      {/* // children as a function example */}
      <EnhancedTable columns={['Title', 'Date', 'By']} data={logs}>
        {(rowData, column) => rowData[column.toLowerCase()]}
      </EnhancedTable>
      {/* // render props example
      // cia dar reiktu prie tipu render prirasyt:
      // render: (rowData: any, column: string) = > React.ReactNode; */}
      {/* <EnhancedTable
        columns={['Title', 'Date', 'By']}
        data={logs}
        render={(rowData, column) => rowData[column.toLowerCase()]}
      /> */}
    </>
  );
};

export default Examples;
