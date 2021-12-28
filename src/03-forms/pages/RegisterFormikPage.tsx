import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';
import '../styles/styles.css';

const initialFormValues = {
	name: '',
	email: '',
	password1: '',
	password2: '',
};

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik
				initialValues={initialFormValues}
				onSubmit={(values) => console.log(values)}
				validationSchema={Yup.object({
					name: Yup.string()
						.max(15, 'Should have 15 chars or less')
						.min(2, 'Should have at last 2 chars')
						.required('Required'),
					email: Yup.string().email('Should be valid email').required('Required'),
					password1: Yup.string().min(6, 'Should have at last 6 chars').required('Required'),
					password2: Yup.string()
						.oneOf([Yup.ref('password1')], 'Passwords must match')
						.required('Required'),
				})}
			>
				{({ handleReset }) => (
					<Form>
						<MyTextInput label='Name' name='name' placeholder='Username' />
						<MyTextInput
							label='Email'
							name='email'
							placeholder='useremail@example.com'
							type='email'
						/>
						<MyTextInput label='Password' name='password1' placeholder='Password' type='password' />
						<MyTextInput
							label='Confirm Password'
							name='password2'
							placeholder='Password'
							type='password'
						/>

						<button type='submit'>Submit</button>
						<button onClick={handleReset}>Reset</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
