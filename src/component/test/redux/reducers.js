import { combineReducers } from 'redux';
import {
  TEST_VIEW_INIT,
  TEST_LIST_SEARCH,
  TEST_LIST_DELETE,
} from './constants';

export function listData(state = [], action) {
  switch (action.type) {
    case TEST_VIEW_INIT:
      return state;
    case TEST_LIST_SEARCH: {
      return action.payload;
    }
    case TEST_LIST_DELETE: {
      const dataId = action.payload;
      const newListDate = state.filter((value) => {
        return value.user_id !== dataId;
      });
      return newListDate;
    }
    default:
      return state;
  }
}

export default combineReducers({
  listData,
});
