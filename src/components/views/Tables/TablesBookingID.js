import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';

const TablesBookingID = (props) => (
  <div className={styles.component}>
    <h2>Tables - Booking ID</h2>
    {props.match.params.id}
  </div>
);

TablesBookingID.propTypes = {
  match: PropTypes.any,

};

export default TablesBookingID;
