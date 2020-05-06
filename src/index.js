import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from "./store/configure_store";
import routs from './router/router'
import Spinner from "./components/Spinner";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
    <Provider store = { store }>
        <ConnectedRouter history={ history }>
            <App>
                <Suspense fallback={ <Spinner /> }>
                    {
                        routs
                    }
                </Suspense>
            </App>
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
