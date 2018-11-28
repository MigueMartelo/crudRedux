import React, { Component } from 'react';

import Header from './components/Header';

// Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
