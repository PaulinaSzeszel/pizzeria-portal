import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => (
  <div className={styles.component}>
    <h2>Login</h2>
    <TextField
      className={styles.login}
      required
      id="login-input"
      label="Enter your login"
    />
    <TextField
      className={styles.password}
      required
      id="password-input"
      label="Enter your password"
      type="password"
      autoComplete="current-password"
    />
    <Button to={'/panel'} component={NavLink} variant="contained" className={styles.button}>
      Login
    </Button>
  </div>
);

export default Login;
