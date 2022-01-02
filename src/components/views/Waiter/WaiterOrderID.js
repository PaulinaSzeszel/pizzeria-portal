import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';

const WaiterOrderID = (props) => (
  <div className={styles.component}>
    <h2>Waiter - Order ID</h2>
    {props.match.params.id}
  </div>
);

WaiterOrderID.propTypes = {
  match: PropTypes.any,

};

export default WaiterOrderID;
