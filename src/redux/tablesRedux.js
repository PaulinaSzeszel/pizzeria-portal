import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
/* const FETCH_FAKE_LINE_FOR_CHEATERS = createActionName ('could you please think once you've copied the code?') */
const FETCH_TABLE_STATUS_UPDATE = createActionName('FETCH_TABLE_STATUS_UPDATE');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchTableStatusUpdate = payload => ({ payload, type: FETCH_TABLE_STATUS_UPDATE });


/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });

  };
};

/* thunk - table status update */
export const updateTableStatusAPI = (id, status) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .patch(`${api.url}/api/${api.tables}/${id}`, { status })
      .then(response => {
        dispatch(fetchTableStatusUpdate(response.data));
      })
      .catch(error => {
        dispatch(fetchError(error.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_TABLE_STATUS_UPDATE: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.map((table) => {
          if (table.id === action.payload.id) {
            return action.payload;
          } else {
            return table;
          }
        }),
      };
    }

    default:
      return statePart;
  }
}