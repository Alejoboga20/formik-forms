import { useField } from 'formik';

export const MyCheckbox = ({ label, ...props }: MyCheckboxProps) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' });

	return (
		<>
			<label htmlFor={props.id || props.name}>
				<input type='checkbox' {...field} {...props} />
				{label}
			</label>

			{meta.touched && meta.error && <span className='error'>{meta.error}</span>}
		</>
	);
};

interface MyCheckboxProps {
	label: string;
	name: string;
	[x: string]: any;
}
