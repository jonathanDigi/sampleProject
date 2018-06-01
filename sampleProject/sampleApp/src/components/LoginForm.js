import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, logInUser } from '../actions';
import { Card, Input, Button, CardSection, Spinner } from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		// action creator being called
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.logInUser({ email, password });
	}
	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={Styles.errorTextStyle}>{this.props.error}</Text>
				</View>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email:"
						placeholder="email@yahoo.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password:"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				{this.renderError()}
				<CardSection>{this.renderButton()}</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	email: state.auth.email,
	password: state.auth.password,
	error: state.auth.error,
	loading: state.auth.loading
});

const Styles = {
	errorTextStyle: {
		fontSize: 22,
		color: 'red',
		alignSelf: 'center'
	}
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, logInUser })(LoginForm);
