import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css';

const initialFormValues = {
	name: '',
	email: '',
	password1: '',
	password2: '',
};

export const RegisterPage = () => {
	const [registerData, setRegisterData] = useState(initialFormValues);

	const { name, email, password1, password2 } = registerData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setRegisterData((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(registerData);
	};

	return (
		<div>
			<h1>Register Page</h1>
			<form onSubmit={onSubmit}>
				<input type='text' placeholder='Name' value={name} onChange={onChange} name='name' />
				<input type='email' placeholder='Email' value={email} onChange={onChange} name='email' />
				<input
					type='password'
					placeholder='Password'
					value={password1}
					onChange={onChange}
					name='password1'
				/>
				<input
					type='password'
					placeholder='Repeat Password'
					value={password2}
					onChange={onChange}
					name='password2'
				/>

				<button type='submit'>Create</button>
			</form>
		</div>
	);
};
