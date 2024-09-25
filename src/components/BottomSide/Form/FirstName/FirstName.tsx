import { useState } from "react";
import { IValueForm } from "../Form";
import s from "./FirstName.module.css";


export default function FirstName(props: any): React.JSX.Element
{
	const [error, setError] = useState<boolean>(false);

	const valueForm: IValueForm = props.props.valueForm;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	const setValueForm: Function = props.props.setValueForm;

	function changeValue(event: React.ChangeEvent<HTMLInputElement>): void
	{
		const value: string = event.currentTarget.value;
		if (value.length < 3)
		{
			setError(true);
		}
		else
		{
			setError(false);
		}
		const newValueForm: IValueForm = {
			firstName: value,
			phone: valueForm.phone,
			agree: valueForm.agree
		};
		setValueForm(newValueForm);
	}

	return (
		<div className={s.wrapper}>
			<input
				onChange={changeValue}
				name="firstName"
				id="firstName"
				className={s.formInput}
				maxLength={50}
				required
			/>
			<label className={s.formLabel}>Имя</label>
			{
				error &&
				<div className={s.error}>Не меньше 3-х символов</div>
			}
		</div>
	);
}