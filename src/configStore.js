import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './rootReducer';

export default function configStore(initialState = {}, history) {
  //  可以增加其他配置
  // eslint-disable-next-line no-undef
  const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
  const middleware = compose(applyMiddleware(thunk, routerMiddleware(history)), devTools);
  const store = createStore(
    rootReducer,
    initialState,
    middleware,
  );
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./rootReducer').default;

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
