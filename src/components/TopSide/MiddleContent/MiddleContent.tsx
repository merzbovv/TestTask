import s from "./MiddleContent.module.css";

export default function MiddleContent(): React.JSX.Element
{
	return (
		<div className={s.container} id="middleContent">
			<div>
				<h1 className={s.h1}>
					Говорят, никогда не поздно сменить профессию
				</h1>
				<p className={s.p}>
					Сделай круто тестовое задание и у тебя получится
				</p>
			</div>
			<div>
				<button className={s.button}>Проще простого!</button>
			</div>
		</div>
	);
}