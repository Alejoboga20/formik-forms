import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

const initialFormValues = {
	name: '',
	email: '',
	password1: '',
	password2: '',
};

export const RegisterPage = () => {
	const { name, email, password1, password2, isValidEmail, onChange, onSubmit, resetForm } =
		useForm(initialFormValues);

	return (
		<div>
			<h1>Register Page</h1>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Name'
					value={name}
					onChange={onChange}
					name='name'
					className={`${name.trim().length <= 0 && 'has-error'} `}
				/>
				{name.trim().length <= 0 && (
					<span>
						<small>Field Required</small>
					</span>
				)}

				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={onChange}
					name='email'
					className={`${!isValidEmail(email) && 'has-error'} `}
				/>
				{!isValidEmail(email) && (
					<span>
						<small>Invalid Email</small>
					</span>
				)}

				<input
					type='password'
					placeholder='Password'
					value={password1}
					onChange={onChange}
					name='password1'
				/>
				{password1.trim().length <= 0 && (
					<span>
						<small>Field Required</small>
					</span>
				)}
				{password1.trim().length < 6 && (
					<span>
						<small>Password length should be 6</small>
					</span>
				)}

				<input
					type='password'
					placeholder='Repeat Password'
					value={password2}
					onChange={onChange}
					name='password2'
				/>
				{password1.trim().length <= 0 && (
					<span>
						<small>Field Required</small>
					</span>
				)}
				{password1.trim() !== password2.trim() && (
					<span>
						<small>Passwords don't match</small>
					</span>
				)}

				<button type='submit'>Create</button>
				<button type='button' onClick={resetForm}>
					Reset Form
				</button>
			</form>
		</div>
	);
};
