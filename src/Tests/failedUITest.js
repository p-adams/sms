import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './AppState/store'
import {Provider} from 'mobx-react'
import registerServiceWorker from './registerServiceWorker';
const store = new Store()
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
