import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';

const TablesEventID = (props) => (
  <div className={styles.component}>
    <h2>Tables - Event ID</h2>
    {props.match.params.id}
  </div>
);

TablesEventID.propTypes = {
  match: PropTypes.any,

};

export default TablesEventID;
