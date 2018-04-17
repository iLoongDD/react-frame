import 'isomorphic-fetch';
import { createAction } from 'redux-actions';

import {
  TEST_LIST_SEARCH,
  TEST_VIEW_INIT,
  TEST_LIST_DELETE,
} from './constants';


const onviewInitAction = createAction(TEST_VIEW_INIT);
const onListSearchAction = createAction(TEST_LIST_SEARCH);
const onListDeleteAction = createAction(TEST_LIST_DELETE);

export function onViewInit() {
  return (dispatch) => {
    dispatch(onviewInitAction());
  };
}

export function onListSearch() {
  const listData = [
    { key: '01', nameId: '01', name: '家具款', fruit: 'apple' },
    { key: '02', nameId: '02', name: '建瓯市', fruit: 'apple' },
    { key: '03', nameId: '03', name: '少年宫口', fruit: 'apple' },
    { key: '04', nameId: '04', name: '口味', fruit: 'apple' },
    { key: '06', nameId: '06', name: '口味', fruit: 'apple' },
  ];
  return (dispatch) => {
    fetch('api/users/queryUsers', {
      method: 'GET',
    }).then((resp) => {
      if (resp.status === 200) {
        return resp.json();
      }
    }).then((data) => {
      dispatch(onListSearchAction(data));
    }).catch((err) => {
      console.log(err);
    });
  };
}

export function onListDelete(nameId) {
  return (dispatch) => {
    dispatch(onListDeleteAction(nameId));
  };
}
