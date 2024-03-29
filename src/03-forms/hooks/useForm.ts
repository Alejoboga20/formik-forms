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

	const resetForm = () => setFormData({ ...initialState });

	const isValidEmail = (email: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	return {
		...formData,
		formData,

		isValidEmail,
		onChange,
		onSubmit,
		resetForm,
	};
};
