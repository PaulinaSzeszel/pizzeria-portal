import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    tables: PropTypes.any,
    fetchTables: PropTypes.func,
    fetchTableStatusUpdate: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status) {
    const { fetchTableStatusUpdate } = this.props;

    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => fetchTableStatusUpdate(id, 'thinking')}>thinking</Button>
            <Button onClick={() => fetchTableStatusUpdate(id, 'ordered')} to={`${process.env.PUBLIC_URL}/waiter/order/`}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <>
            <Button onClick={() => fetchTableStatusUpdate(id, 'ordered')} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
          </>
        );
      case 'ordered':
        return (
          <>
            <Button onClick={() => fetchTableStatusUpdate(id, 'prepared')}>prepared</Button>
            <Button to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>new order</Button>
          </>
        );
      case 'prepared':
        return (
          <>
            <Button onClick={() => fetchTableStatusUpdate(id, 'delivered')} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>delivered</Button>
          </>
        );
      case 'delivered':
        return (
          <Button onClick={() => fetchTableStatusUpdate(id, 'paid')} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => fetchTableStatusUpdate(id, 'free')} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Idle Time</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(table => (
                <TableRow key={table.id}>
                  <TableCell component="th" scope="row">
                    {table.id}
                  </TableCell>
                  <TableCell>
                    {table.status}
                  </TableCell>
                  <TableCell>
                    {table.idle}
                  </TableCell>
                  <TableCell>
                    {table.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${table.order}`}>
                        {table.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(table.id, table.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;