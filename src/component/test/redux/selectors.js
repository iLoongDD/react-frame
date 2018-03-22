import { createSelector } from 'reselect';

export const testSelectors = state => state.testInfo;
export const testListSelectors = createSelector(testSelectors, testInfo => testInfo.listData);
