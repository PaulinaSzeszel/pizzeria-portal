import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { StylesProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingNew from './components/views/Tables/TablesBookingNew';
import TablesBookingID from './components/views/Tables/TablesBookingID';
import TablesEventNew from './components/views/Tables/TablesEventNew';
import TablesEventID from './components/views/Tables/TablesEventID';
import Waiter from './components/views/Waiter/WaiterContainer';
import WaiterOrderNew from './components/views/Waiter/WaiterOrderNew';
import WaiterOrderID from './components/views/Waiter/WaiterOrderID';
import Dashboard from './components/views/Dashboard/Dashboard';

const theme = createTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    // secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingID} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventNew} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEventID} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderID} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
