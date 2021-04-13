import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ErrorBoundry from './components/error-boundry';
import {BookstoreServiceProvider} from './components/bookstore-service-contex';
import BookstoreService from './services'
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import App from './components/app';


const bookstoreservice = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreservice}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>,
  document.getElementById('root')
);

