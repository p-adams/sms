import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './AppState/store'
import {Provider} from 'mobx-react'
import registerServiceWorker from './registerServiceWorker';
const store = new Store()


ReactDOM.render(<Provider store={store}>
                  <App/>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
