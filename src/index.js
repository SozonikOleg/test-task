import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers,  applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import reducers from './redux/reducers';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(
    combineReducers({ app: reducers }),
    composeWithDevTools(applyMiddleware()),
);

render(
  <React.StrictMode>
      <Provider store={store}>
          <SnackbarProvider>
              <App />
          </SnackbarProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
