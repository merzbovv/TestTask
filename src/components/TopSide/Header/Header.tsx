import scrollToElem from "../../../modules/scrollToElem";
import s from "./Header.module.css";
import useSize from "../../../modules/useSize.ts";
import lines from "./Images/lines.png";
import close from "./Images/close.png";
import rightArrow from "./Images/rightArrow.png";
import { useEffect, useState } from "react";

export default function Header(): React.JSX.Element
{
	const [showNav, setShowNav] = useState<boolean>(false);

	const windowSize = useSize();

	useEffect(() =>
	{
		const middleContent: HTMLDivElement = (document.getElementById("middleContent") as HTMLDivElement);
		if (showNav)
		{
			middleContent.style.zIndex = "0";
		}
		else
		{
			middleContent.style.zIndex = "2";
		}
	}, [showNav])

	/**
	 * Переход к конкретному элементу на странице по id
	 * @param event
	 */
	function scrollToElement(event: React.MouseEvent<HTMLDivElement>): void
	{
		setShowNav(false);
		switch (event.currentTarget.id)
		{
			case "howItWorksLink":
				scrollToElem("howItWorks");
				break;

			case "thirdBlockLink":
				scrollToElem("thirdBlock");
				break;

			case "questionsAndAnswersLink":
				scrollToElem("questionsAndAnswers");
				break;

			case "formLink":
				scrollToElem("form");
				break;

			default:
				break;
		}
	}

	return (
		<header className={s.header}>
			<div className={s.leftSide}>
				<div className={s.logo}>
					<div className={s.circleBlue} />
					<div className={s.circleWhite} />
				</div>
				<div className={s.nameCompany}>
					testLab
				</div>
			</div>
			{
				windowSize[0] > 768 ?
					<nav className={s.rightSide}>
						<div id="howItWorksLink" onClick={scrollToElement}>Как это работает</div>
						<div id="thirdBlockLink" onClick={scrollToElement}>3-й блок</div>
						<div id="questionsAndAnswersLink" onClick={scrollToElement}>Вопросы и ответы</div>
						<div id="formLink" onClick={scrollToElement}>Форма</div>
					</nav>
					:
					<div className={s.rightSide} onClick={() => setShowNav(!showNav)}>
						<img src={lines} alt={"lines"} className={s.lines} />
					</div>
			}
			{
				showNav &&
				<div className={s.mobileNav}>
					<div>
						<div className={s.wrapperLogo}>
							<div className={s.mobileLogo}>
								<div className={s.logo + " " + s.circles}>
									<div className={s.circleBlue} />
									<div className={s.circleGrey} />
								</div>
								<div className={s.nameCompanyMobile}>
									testLab
								</div>
							</div>
							<div onClick={() => setShowNav(!showNav)} className={s.close}>
								<img src={close} alt={"close"} />
							</div>
						</div>
						<hr className={s.hr} />
						<div>
							<div className={s.wrapperMobileItemNav} id="howItWorksLink" onClick={scrollToElement}>
								<div>
									Как это работает
								</div>
								<div>
									<img src={rightArrow} alt={"rightArrow"} />
								</div>
							</div>
							<hr className={s.hr} />
							<div className={s.wrapperMobileItemNav} id="thirdBlockLink" onClick={scrollToElement}>
								<div className={s.mobileItemNav}>
									3-й блок
								</div>
								<div>
									<img src={rightArrow} alt={"rightArrow"} />
								</div>
							</div>
							<hr className={s.hr} />
							<div className={s.wrapperMobileItemNav} id="questionsAndAnswersLink" onClick={scrollToElement}>
								<div className={s.mobileItemNav}>Вопросы и ответы
								</div>
								<div>
									<img src={rightArrow} alt={"rightArrow"} />
								</div>
							</div>
							<hr className={s.hr} />
							<div className={s.wrapperMobileItemNav} id="formLink" onClick={scrollToElement}>
								<div className={s.mobileItemNav}>
									Форма
								</div>
								<div>
									<img src={rightArrow} alt={"rightArrow"} />
								</div>
							</div>
							<div className={s.border} />
						</div>
					</div>
				</div>
			}
		</header>
	);
}