import { Question } from "../Questions";
import s from "./Questionitem.module.css";
import close from "./Images/close.png";
import plus from "./Images/plus.png";
import { useState } from "react";


export default function QuestionItem(props: any): React.JSX.Element
{
	const [showDescription, setShowDescription] = useState<boolean>(false);

	const item: Question = props.props;

	return (
		<>
			<hr className={s.hr} />
			<div className={s.container} onClick={() => setShowDescription(!showDescription)}>
				<div className={s.item}>
					<div className={s.wrapper}>
						<div>
							<p className={s.bold}>{item.fullName}</p>
						</div>
						<div>
							<img
								className={s.img}
								src={showDescription ? close : plus}
								alt={showDescription ? "-" : "+"}
								style={showDescription ?
									{ transition: "0.3s" }
									:
									{ transform: "rotate(-90deg)", transition: "0.3s" }}
							/>
						</div>
					</div>
					{
						showDescription &&
						<div>
							<p className={s.regular}>{item.description}</p>
						</div>
					}
				</div>
			</div>
		</>
	);
}