import { combineReducers } from 'redux';
import {
  TEST_VIEW_INIT,
  TEST_LIST_SEARCH,
} from './constants';

export function listData(state = [], action) {
  switch (action.type) {
    case TEST_VIEW_INIT:
      return state;
    case TEST_LIST_SEARCH: {
      console.log('action', action);
      return action.payload;
    }
    default:
      return state;
  }
}

export default combineReducers({
  listData,
});
