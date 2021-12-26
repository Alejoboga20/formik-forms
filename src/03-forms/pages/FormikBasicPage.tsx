import { useFormik } from 'formik';
import '../styles/styles.css';

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
};

export const FormikBasicPage = () => {
	const { handleSubmit, handleChange, values } = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div>
			<h1>Formik Basic Tutorial</h1>

			<form noValidate onSubmit={handleSubmit}>
				<label htmlFor='firstName'>First Name</label>
				<input type='text' name='firstName' onChange={handleChange} value={values.firstName} />
				<span>First Name is required</span>

				<label htmlFor='lastName'>Last Name</label>
				<input type='text' name='lastName' onChange={handleChange} value={values.lastName} />
				<span>Last Name is required</span>

				<label htmlFor='email'>Email</label>
				<input type='email' name='email' onChange={handleChange} value={values.email} />
				<span>Email is required</span>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
