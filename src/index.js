import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './components/app/libs/test-redux/reducer'
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import "/home/mansour/test/src/components/app/libs/langs"

const store = createStore(rootReducer)

store.dispatch({
  type: 'GET-PERSONAL'
})

console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
