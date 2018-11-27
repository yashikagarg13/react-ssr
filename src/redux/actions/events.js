import Axios from 'axios';

import Constants from '../../helpers/constants';
import * as ActionTypes from '../action-types';

function fetchEventsRequest() {
  return {
    type: ActionTypes.FETCH_EVENTS_REQUEST,
  };
}

function fetchEventSuccess(payload) {
  return {
    type: ActionTypes.FETCH_EVENTS_SUCCESS,
    payload,
  };
}

function fetchEventFailure(dispatch, payload) {
  dispatch({
    type: ActionTypes.FETCH_EVENTS_REQUEST,
    payload,
  });
}

function fetchEvents() {
  return (dispatch) => {
    dispatch(fetchEventsRequest());

    Axios.get(`${Constants.API_URL}/events`).then((response) => {
      const events = (response.data.events || []).reduce((data, item) => {
        data[item.copyid] = item;
        return data;
      }, {});
      dispatch(fetchEventSuccess({ events }));
    }, (error) => {
      dispatch(fetchEventFailure({ error }));
    });
  };
}

export default {
  fetchEvents,
};
