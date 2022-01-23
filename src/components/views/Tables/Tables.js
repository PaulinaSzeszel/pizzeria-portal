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

const demoContent = [
  {
    hour: '12:00 - 12:30',
    tables: [
      { table: 1, status: 'booked', bookingId: 0001 },
      { table: 2, status: 'free', bookingId: null },
      { table: 3, status: 'event', bookingId: 1001 },
      { table: 4, status: 'booked', bookingId: 0002 },
    ],
  },
  {
    hour: '12:30 - 13:00',
    tables: [
      { table: 1, status: 'booked', bookingId: 0003 },
      { table: 2, status: 'booked', bookingId: 0004 },
      { table: 3, status: 'event', bookingId: 1002 },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '13:00 - 13:30',
    tables: [
      { table: 1, status: 'booked', bookingId: 0005 },
      { table: 2, status: 'event', bookingId: 1003 },
      { table: 3, status: 'event', bookingId: 1004 },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '13:30 - 14:00',
    tables: [
      { table: 1, status: 'booked', bookingId: 0006 },
      { table: 2, status: 'booked', bookingId: 0007 },
      { table: 3, status: 'booked', bookingId: 0008 },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '14:00 - 14:30',
    tables: [
      { table: 1, status: 'booked', bookingId: 0009 },
      { table: 2, status: 'free', bookingId: null },
      { table: 3, status: 'free', bookingId: null },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '14:30 - 15:00',
    tables: [
      { table: 1, status: 'booked', bookingId: 0010 },
      { table: 2, status: 'event', bookingId: 1005 },
      { table: 3, status: 'booked', bookingId: 0011 },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '15:00 - 15:30',
    tables: [
      { table: 1, status: 'event', bookingId: 1006 },
      { table: 2, status: 'event', bookingId: 1007 },
      { table: 3, status: 'event', bookingId: 1008 },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '15:30 - 16:00',
    tables: [
      { table: 1, status: 'booked', bookingId: 0012 },
      { table: 2, status: 'booked', bookingId: 0013 },
      { table: 3, status: 'free', bookingId: null },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '16:00 - 16:30',
    tables: [
      { table: 1, status: 'booked', bookingId: 0014 },
      { table: 2, status: 'event', bookingId: 1009 },
      { table: 3, status: 'booked', bookingId: 0015 },
      { table: 4, status: 'booked', bookingId: 0016 },
    ],
  },
  {
    hour: '16:30 - 17:00',
    tables: [
      { table: 1, status: 'booked', bookingId: 0017 },
      { table: 2, status: 'event', bookingId: 1010 },
      { table: 3, status: 'booked', bookingId: 0018 },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
];

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