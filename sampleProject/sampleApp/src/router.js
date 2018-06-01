import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LandingPage from './components/LandingPage';

const RouterComponent = () => (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="Landing" component={LandingPage} initial />
			</Scene>
		</Router>
	);


export default RouterComponent;
