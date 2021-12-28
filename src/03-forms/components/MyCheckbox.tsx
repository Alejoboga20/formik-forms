import { ErrorMessage, useField } from 'formik';

export const MyCheckbox = ({ label, ...props }: MyCheckboxProps) => {
	const [field] = useField({ ...props, type: 'checkbox' });

	return (
		<>
			<label htmlFor={props.id || props.name}>
				<input type='checkbox' {...field} {...props} />
				{label}
			</label>

			<ErrorMessage name={props.name} component='span' />
		</>
	);
};

interface MyCheckboxProps {
	label: string;
	name: string;
	[x: string]: any;
}
