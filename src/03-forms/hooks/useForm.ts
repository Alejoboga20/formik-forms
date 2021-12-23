import { ChangeEvent, FormEvent, useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
	const [formData, setFormData] = useState(initialState);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
	};

	return {
		...formData,
		formData,
		onChange,
		onSubmit,
	};
};
