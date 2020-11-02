import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StrateProvider } from './Components/StateProvider';
import reducer, {initialState} from "./Components/reducer"

ReactDOM.render(
  <React.StrictMode>
    <StrateProvider initialState={initialState} reducer={reducer}>
       <App />
    </StrateProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
