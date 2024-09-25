import s from "./Footer.module.css";


export default function Footer(): React.JSX.Element
{
	return (
		<footer className={s.container}>
			<p>© 2021 Лаборатория интернет</p>
		</footer>
	);
}