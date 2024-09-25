import s from "./Agree.module.css";
import { IValueForm } from "../Form";


export default function Agree(props: any): React.JSX.Element
{
	const valueForm: IValueForm = props.props.valueForm;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	const setValueForm: Function = props.props.setValueForm;

	function changeValue(event: React.ChangeEvent<HTMLInputElement>): void
	{
		const value: boolean = event.currentTarget.checked;
		const newValueForm: IValueForm = {
			firstName: valueForm.firstName,
			phone: valueForm.phone,
			agree: value
		};
		setValueForm(newValueForm);
	}

	return (
		<div className={s.container}>
			<input id="agree" type="checkbox" onChange={changeValue} className={s.checkbox} />
			<label htmlFor="agree" className={s.label}>Согласен, отказываюсь</label>
		</div>
	);
}