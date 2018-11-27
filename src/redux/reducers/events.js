import { combineReducers } from 'redux';

import * as ActionTypes from '../action-types';

const entities = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        ...action.payload.events,
      };
    default: return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_EVENTS_REQUEST:
      return true;
    case ActionTypes.FETCH_EVENTS_SUCCESS:
    case ActionTypes.FETCH_EVENTS_FAILURE:
      return false;
    default: return state;
  }
};

const events = combineReducers({
  entities,
  isFetching,
});

export default events;
