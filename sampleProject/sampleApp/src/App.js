import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentWillMount() {
    //MongoDB stuff
  }
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<Router />
			</Provider>
		);
	}
}

export default App;
