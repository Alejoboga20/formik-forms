import { ErrorMessage, useField } from 'formik';

export const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className='text-input' {...field} placeholder={props.placeholder || ''} />
			<ErrorMessage name={props.name} component='span' />
		</>
	);
};

interface MyTextInputProps {
	label: string;
	name: string;
	type?: 'text' | 'email' | 'password';
	placeholder?: string;
	[x: string]: any;
}
