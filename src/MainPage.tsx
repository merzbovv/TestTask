import BottomSide from "./components/BottomSide/BottomSide";
import MiddleSide from "./components/MiddleSide/MiddleSide";
import TopSide from "./components/TopSide/TopSide";
import s from "./Globals.module.css";

export default function MainPage(): React.JSX.Element
{
	return (
		<div className={s.body}>
			<TopSide />
			<MiddleSide />
			<BottomSide />
		</div>
	)
}