const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');

const App = require('./components/App');

const reducer = require('./reducers');
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const appContainerElement = document.createElement('div');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  appContainerElement
);

document.body.appendChild(appContainerElement);
