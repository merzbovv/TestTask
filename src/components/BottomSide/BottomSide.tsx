import s from "./BottomSide.module.css";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";


export default function BottomSide(): React.JSX.Element
{
	return (
		<div className={s.container}>
			<Form />
			<Footer />
		</div>
	);
}