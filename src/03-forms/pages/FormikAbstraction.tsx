import { Formik, Form } from 'formik';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import { MyCheckbox } from '../components/MyCheckbox';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikAbstraction = () => {
	return (
		<div>
			<h1>FormikAbstraction Tutorial</h1>

			<Formik
				initialValues={{ firstName: '', lastName: '', email: '', terms: false, jobType: '' }}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, 'Should have 15 chars or less').required('Required'),
					lastName: Yup.string().max(10, 'Should have 10 chars or less').required('Required'),
					email: Yup.string().email('Should be valid email').required('Required'),
					jobType: Yup.string()
						.oneOf(['developer', 'designer', 'tester'], 'Option not allowed')
						.required('Required'),
					terms: Yup.boolean().oneOf([true], 'Terms should be accepted'),
				})}
			>
				{(formik) => (
					<Form>
						<MyTextInput label='First Name' name='firstName' placeholder='John' />
						<MyTextInput label='Last Name' name='lastName' placeholder='Doe' />
						<MyTextInput
							label='Email Address'
							name='email'
							placeholder='john@example.com'
							type='email'
						/>

						<MySelect name='jobType' label='Job Type'>
							<option value=''>Pick something</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='tester'>Tester</option>
							<option value='it'>It-Jr</option>
						</MySelect>

						<MyCheckbox label='Terms and Conditions' name='terms' />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
