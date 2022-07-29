import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


// RHONDA_BANKING DISPLAY BELOW
import RhondaApp from './RHONDA_BANKING/containers/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './RHONDA_BANKING/store/reducer';
// import reportWebVitals from './reportWebVitals';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <App />  */}
    <Provider store={store}>
        <BrowserRouter>
            <RhondaApp />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>, 
  document.getElementById('root')
);

// reportWebVitals();
