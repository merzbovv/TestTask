import Header from "./Header/Header";
import MiddleContent from "./MiddleContent/MiddleContent";
import s from "./TopSide.module.css";

export default function TopSide(): React.JSX.Element
{
	return (
		<div className={s.container}>
			<Header />
			<MiddleContent />
			<div className={s.colorOverlay} />
		</div>
	)
}