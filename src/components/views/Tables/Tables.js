import React from 'react';
import styles from './Tables.module.scss';
import { Link, NavLink } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = {
  tables: [
    'Table 1',
    'Table 2',
    'Table 3',
  ],
  workingHours: {
    open: 12,
    close: 24,
  },
};

const renderActions = (status, table) => {
  switch (status) {
    case 'free':
      return (
        <Button to={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NavLink}>Free</Button>
      );
    case 'booked':
      return (
        <Button to={`${process.env.PUBLIC_URL}/tables/booking/${table.bookingId}`} component={NavLink}>{table.status}</Button>
      );
    case 'event':
      return (
        <Button to={`${process.env.PUBLIC_URL}/tables/events/${table.bookingId}`} component={NavLink}>{table.status}</Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <div>
    <div className={styles.component}>
      <h2>Tables</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Booking ID</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New Event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Event ID</Link>
    </div>

    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map((row) => {
            return (
              <TableRow key={row.hour}>
                <TableCell className={styles.hour}>{row.hour}</TableCell>
                {row.tables.map((table) => {
                  return (
                    <TableCell className={styles.book} key={table.id}>
                      {renderActions(table.status, table)}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Tables;