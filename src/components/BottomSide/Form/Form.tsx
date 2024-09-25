import { useState } from "react";
import Agree from "./Agree/Agree";
import FirstName from "./FirstName/FirstName";
import s from "./Form.module.css";
import commonStyles from "../../../common/CommonStyles.module.css";
import Phone from "./Phone/Phone";
import ButtonSubmit from "./ButtonSubmit/ButtonSubmit";

export interface IValueForm
{
	firstName: string,
	phone: number,
	agree: boolean
}


export default function Form(): React.JSX.Element
{
	const [valueForm, setValueForm] = useState<IValueForm>({ firstName: "", phone: 0, agree: false });

	return (
		<div id="form" className={s.container}>
			<h2 className={commonStyles.h2}>Отправь форму</h2>
			<form className={s.form}>
				<FirstName props={{ valueForm: valueForm, setValueForm: setValueForm }} />
				<Phone props={{ valueForm: valueForm, setValueForm: setValueForm }} />
				<Agree props={{ valueForm: valueForm, setValueForm: setValueForm }} />
				<ButtonSubmit props={{ valueForm: valueForm }} />
			</form>
		</div>
	);
}