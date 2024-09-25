import HowItWorks from "./HowItWorks/HowItWorks";
import Informations from "./Informations/Informations";
import Questions from "./Questions/Questions";
import Slider from "./Slider/Slider.tsx";


export default function MiddleSide(): React.JSX.Element
{
	return (
		<div>
			<HowItWorks />
			<Slider />
			<Questions />
			<Informations />
		</div>
	);
}