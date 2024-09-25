import QuestionItem from "./QuestionItem/QuestionItem";
import s from "./Questions.module.css";
import commonStyles from "../../../common/CommonStyles.module.css";
import questionsJson from "./questions.json";

export type Question =
	{
		id: number,
		fullName: string,
		description: string
	}

export default function Questions(): React.JSX.Element
{
	return (
		<div className={s.container} id="questionsAndAnswers">
			<h2 className={commonStyles.h2}>Вопросы и ответы</h2>
			<>
				{
					questionsJson.map((item: Question) =>
					{
						return <QuestionItem props={item} key={item.id} />
					})
				}
			</>
		</div>
	);
}