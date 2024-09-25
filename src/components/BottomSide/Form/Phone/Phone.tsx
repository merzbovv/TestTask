import { useState } from "react";
import s from "./Phone.module.css";
import { IValueForm } from "../Form";


export default function Phone(props: any): React.JSX.Element
{
	const [error, setError] = useState<boolean>(false);

	const valueForm: IValueForm = props.props.valueForm;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	const setValueForm: Function = props.props.setValueForm;

	function changeValue(event: React.ChangeEvent<HTMLInputElement>): void
	{
		const validate: RegExpMatchArray = event.currentTarget.value.match(/^\d+$/)!;
		if (validate === null)
		{
			setError(true);
		}
		else
		{
			setError(false);
		}
		const value: number = Number(event.currentTarget.value);
		const newValueForm: IValueForm = {
			firstName: valueForm.firstName,
			phone: value,
			agree: valueForm.agree
		};
		setValueForm(newValueForm);
	}

	return (
		<div className={s.wrapper}>
			<input
				onChange={changeValue}
				name="phone"
				id="phone"
				className={s.formInput}
				required
				maxLength={11}
			/>
			<label className={s.formLabel}>Телефон</label>
			{
				error &&
				<div className={s.error}>Только цифры</div>
			}
		</div>
	);
}