import s from "./Slider.module.css";
import commonStyles from "../../../common/CommonStyles.module.css";
import SliderJson from "./SliderInformation.json";
import { useState } from "react";
import leftArrow from "./Images/leftArrow.png";
import { Finger, FingerSwipeEvent } from "react-finger";

type SliderInformation = {
	id: string,
	fullName: string,
	description: string,
	avatar: string,
	city: string
}


export default function Slider(): React.JSX.Element
{
	const [sliderElements, setSliderElements] = useState(JSON.parse(JSON.stringify(SliderJson)));

	const arrDots: Array<React.JSX.Element> = new Array<React.JSX.Element>();
	const sliderJSXElements: Array<React.JSX.Element> = new Array<React.JSX.Element>();

	const FingeredDiv = Finger("div");

	sliderElements.map((item: SliderInformation, index: number) =>
	{
		const copyArraySliderElements: Array<SliderInformation> = [...sliderElements];
		const prevItem: SliderInformation = copyArraySliderElements.shift()!;

		arrDots.push(<div key={index} className={(Number(prevItem.id) - 1) === index ? s.roundActive : s.round} />)

		sliderJSXElements.push(
			<div className={s.item} key={index} id="itemSlide">
				<div className={s.topSide}>
					<div className={s.avatar}><img src={item.avatar} /></div>
					<div className={s.wrapper}>
						<div className={s.bold}>
							{item.fullName}
						</div>
						<div className={s.regular + " " + s.city}>
							{item.city}
						</div>
					</div>
				</div>
				<div className={s.description}>
					{item.description}
				</div>
			</div>
		);
	})

	/*
	* Сдвиг слайда влево
	*/
	function offsetLeft()
	{
		const copyArraySliderElements: Array<SliderInformation> = [...sliderElements];
		const prevItem: SliderInformation = copyArraySliderElements.pop()!;
		copyArraySliderElements.unshift(prevItem);
		setSliderElements(copyArraySliderElements);
	}

	/*
	* Сдвиг слайда вправо
	*/
	function offsetRight()
	{
		const copyArraySliderElements: Array<SliderInformation> = [...sliderElements];
		const prevItem: SliderInformation = copyArraySliderElements.shift()!;
		copyArraySliderElements.push(prevItem);
		setSliderElements(copyArraySliderElements);
	}

	function swipeSlide(event: FingerSwipeEvent<HTMLDivElement>)
	{
		if (event.fingerType === "onSwipe")
		{
			if (event.direction === "left")
			{
				offsetLeft();
			} else
			{
				offsetRight();
			}
		}
	}

	return (
		<div className={s.container}>
			<h2 className={commonStyles.h2}>Отзывы</h2>
			<FingeredDiv onSwipe={swipeSlide}>
				<div className={s.wrapperSlider}>
					<img src={leftArrow} alt={"<"} onClick={offsetLeft} className={s.arrow} />
					<div className={s.slider}>
						{
							sliderJSXElements
						}
					</div>
					<img src={leftArrow} alt={">"} onClick={offsetRight} className={s.arrow + " " + s.rotateArrow} />
				</div>
			</FingeredDiv>
			<div className={s.dotsWrapper}>
				{arrDots}
			</div>
		</div>
	);
}