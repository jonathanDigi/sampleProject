import React from 'react';
import { View, Text, Image } from 'react-native';
import { CardSection, Card, LoginSignUpButton } from './common';
import { DIGILOCKLOGO } from './Images';


const LandingPage = () => (
	<Card>
		<CardSection style={{ marginTop: 210 }}>
			<View>
      <Image style={{ width: 300, height: 55 }}source={DIGILOCKLOGO} />

			</View>
		</CardSection>

		<CardSection>
			<View>
				<Text style={Styles.blueTextStyle}> Package Locker </Text>
			</View>
		</CardSection>

		<CardSection style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
			<Text style={Styles.CopyrightStyle}>©Copyright 2018 Digilock by Security People Inc. </Text>
		</CardSection>

    <CardSection style={{ position: 'absolute', bottom: 170, left: 0, right: 0 }}>
    <LoginSignUpButton>
      Login
    </LoginSignUpButton>
    </CardSection>
	</Card>
);

export default LandingPage;

const Styles = {
	textStyle: {
		fontSize: 28,
		color: 'black',
		fontStyle: ('bold', 'normal')
	},
	blueTextStyle: {
		fontSize: 30,
		color: '#1ABAEF',
		fontStyle: ('bold', 'normal')
	},
	CopyrightStyle: {
		fontSize: 11,
		color: '#1ABAEF',
		fontStyle: ('bold', 'normal'),
    flexDirection: 'row'
	}
};
