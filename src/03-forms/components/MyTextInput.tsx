import { useField } from 'formik';

export const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className='text-input' {...field} placeholder={props.placeholder || ''} />
			{meta.touched && meta.error && <span className='error'>{meta.error}</span>}
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
