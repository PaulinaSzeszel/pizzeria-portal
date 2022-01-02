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
    hour: '12:00 - 12:29',
    tables: [
      { table: 1, status: 'booked', bookingId: 2355 },
      { table: 2, status: 'free', bookingId: null },
      { table: 3, status: 'event', bookingId: 2642 },
      { table: 4, status: 'booked', bookingId: 1167 },
    ],
  },
  {
    hour: '12:30 - 12:59',
    tables: [
      { table: 1, status: 'booked', bookingId: 9126 },
      { table: 2, status: 'booked', bookingId: 2009 },
      { table: 3, status: 'event', bookingId: 1367 },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '13:00 - 13:29',
    tables: [
      { table: 1, status: 'booked', bookingId: 54326 },
      { table: 2, status: 'event', bookingId: 2344 },
      { table: 3, status: 'event', bookingId: 65435 },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '13:30 - 13:59',
    tables: [
      { table: 1, status: 'booked', bookingId: 6324 },
      { table: 2, status: 'booked', bookingId: 34435 },
      { table: 3, status: 'booked', bookingId: 4521 },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '14:00 - 14:29',
    tables: [
      { table: 1, status: 'booked', bookingId: 45356 },
      { table: 2, status: 'free', bookingId: null },
      { table: 3, status: 'free', bookingId: null },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '14:30 - 14:59',
    tables: [
      { table: 1, status: 'booked', bookingId: 8764 },
      { table: 2, status: 'event', bookingId: 87456 },
      { table: 3, status: 'booked', bookingId: 5321 },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '15:00 - 15:29',
    tables: [
      { table: 1, status: 'event', bookingId: 5454 },
      { table: 2, status: 'event', bookingId: 2521 },
      { table: 3, status: 'event', bookingId: 5643 },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '15:30 - 15:59',
    tables: [
      { table: 1, status: 'booked', bookingId: 8764 },
      { table: 2, status: 'booked', bookingId: 8746 },
      { table: 3, status: 'free', bookingId: null },
      { table: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '16:00 - 16:29',
    tables: [
      { table: 1, status: 'booked', bookingId: 3490 },
      { table: 2, status: 'event', bookingId: 1295 },
      { table: 3, status: 'booked', bookingId: 3486 },
      { table: 4, status: 'booked', bookingId: 1123 },
    ],
  },
  {
    hour: '16:30 - 16:59',
    tables: [
      { table: 1, status: 'booked', bookingId: 8764 },
      { table: 2, status: 'event', bookingId: 87456 },
      { table: 3, status: 'booked', bookingId: 5321 },
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
