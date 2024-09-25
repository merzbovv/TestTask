import { useState } from "react";
import s from "./ButtonSubmit.module.css";
import { IValueForm } from "../Form";


export default function ButtonSubmit(props: any): React.JSX.Element
{
	const [error, setError] = useState<boolean>(false);

	const valueForm: IValueForm = props.props.valueForm;

	async function submit(event: React.MouseEvent<HTMLButtonElement>): Promise<void>
	{
		event.preventDefault();
		if (!valueForm.agree || valueForm.firstName.length === 0 || String(valueForm.phone).length < 11)
		{
			setError(true);
		}
		else
		{
			setError(false);
			// Пример простого GET запроса
			const getToDos: Response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
				method: "GET",
				headers: { "Content-Type": "application/json" },
				cache: "no-store"
			});
			alert(JSON.stringify(await getToDos.json()))
		}
	}

	return (
		<div className={s.container}>
			<button className={s.button} type="submit" onClick={submit}>Отправить</button>
			{
				error &&
				<div className={s.error}>Проверьте поля</div>
			}
		</div>
	);
}