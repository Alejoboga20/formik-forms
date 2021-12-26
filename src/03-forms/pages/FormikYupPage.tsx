import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

const initialValues: FormValues = {
	firstName: '',
	lastName: '',
	email: '',
};

export const FormikYupPage = () => {
	const { handleSubmit, getFieldProps, touched, errors } = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			firstName: Yup.string().max(15, 'Should have 15 chars or less').required('Required'),
			lastName: Yup.string().max(10, 'Should have 10 chars or less').required('Required'),
			email: Yup.string().email('Should be valid email').required('Required'),
		}),
	});

	return (
		<div>
			<h1>Formik Basic Tutorial</h1>

			<form noValidate onSubmit={handleSubmit}>
				<label htmlFor='firstName'>First Name</label>
				<input type='text' {...getFieldProps('firstName')} />
				{touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

				<label htmlFor='lastName'>Last Name</label>
				<input type='text' {...getFieldProps('lastName')} />
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor='email'>Email</label>
				<input type='email' {...getFieldProps('email')} />
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
}
