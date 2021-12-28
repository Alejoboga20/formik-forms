import { useField } from 'formik';

export const MySelect = ({ label, ...props }: MySelectProps) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			{meta.touched && meta.error && <span className='error'>{meta.error}</span>}
		</>
	);
};

interface MySelectProps {
	label: string;
	name: string;
	placeholder?: string;
	[x: string]: any;
}
