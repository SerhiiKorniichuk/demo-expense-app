import { useState } from 'react';
import { string, ref } from 'yup';
import { AuthForm } from './AuthForm';
import { AuthType } from '../../shared/types';

const authFields = {
	displayName: {
		name: 'displayName',
		label: 'Full Name',
		defaultValue: 'ExampleName',
		validator: string()
			.matches(/^[a-zA-Z ]{4,16}$/, 'Full Name can contain only latin chars and spaces')
			.required(),
	},
	username: {
		name: 'username',
		label: 'User Name',
		defaultValue: 'Example123',
		validator: string()
			.matches(
				/^[a-zA-Z\d- ]{4,16}$/,
				'User Name can contain only latin chars, digits, spaces and "-"'
			)
			.required(),
	},
	password: {
		name: 'password',
		label: 'Password',
		defaultValue: 'admin1234567890',
		isValueProtected: true,
		validator: string().min(8).max(32).required(),
	},
	confirmPassword: {
		name: 'confirmPassword',
		label: 'Confirm Password',
		defaultValue: 'admin1234567890',
		isValueProtected: true,
		validator: string()
			.min(8)
			.max(32)
			.oneOf([ref('password'), null], 'Passwords must be equal')
			.required(),
	},
};

export const AuthPage = () => {
	const [authType, setAuthType] = useState<AuthType>(AuthType.SIGN_UP);

	const signUp = () => {
		console.log('sign up');
	};

	const signIn = () => {
		console.log('sign in');
	};

	const switchType = () => {
		setAuthType((prevAuthType) =>
			prevAuthType === AuthType.SIGN_IN ? AuthType.SIGN_UP : AuthType.SIGN_IN
		);
	};

	return (
		<AuthForm
			authType={authType}
			switchType={switchType}
			{...(authType === AuthType.SIGN_IN
				? {
						fields: [authFields.username, authFields.password],
						submitAction: signIn,
						switchTypeMessage: { text: 'Don’t have account yet?', link: 'New Account' },
				  }
				: {
						fields: [
							authFields.displayName,
							authFields.username,
							authFields.password,
							authFields.confirmPassword,
						],
						submitAction: signUp,
						switchTypeMessage: { text: 'I have an account', link: 'Go to Sign in' },
				  })}
		/>
	);
};
