import React from 'react';
import { Field, Input, Control, Button } from 'reactbulma';

export const Login = () => {
	return(
			<Field>
				<label>Login</label>
				<Control>
					<Input placeholder='Email Address' type='email' />
				</Control>
				<Control>
					<Input placeholder='Password' type='password' />
				</Control>
				<Field>
					<Button primary onClick={() => {alert('Logging in...')}}>Login</Button>
				</Field>
			</Field>

		);
}