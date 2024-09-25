import s from "./HowItWorks.module.css";
import commonStyles from "../../../common/CommonStyles.module.css";
import delivery from "./Images/delivery-truck.png";
import secure from "./Images/secure.png";
import waiting from "./Images/waiting.png";
import money from "./Images/money-bags.png";
import manAndTruck from "./Images/manAndTruck.png";


export default function HowItWorks(): React.JSX.Element
{
	return (
		<div className={s.container}>
			<div className={s.howItWorks} id="howItWorks">
				<h2 className={commonStyles.h2}>Как это работает</h2>
				<div className={s.containerItems}>
					<div className={s.item}>
						<div>
							<img src={waiting} alt="waiting" />
						</div>
						<div className={s.infoWrapper}>
							<div>
								<p className={s.bold}>Прочитай задание внимательно</p>
							</div>
							<div>
								<p className={s.regular}>Думаю у тебя не займет это больше двух-трех минут</p>
							</div>
						</div>
					</div>
					<div className={s.item}>
						<div>
							<img src={delivery} alt="delivery" />
						</div>
						<div className={s.infoWrapper}>
							<div>
								<p className={s.bold}>Изучи весь макет заранее</p>
							</div>
							<div>
								<p className={s.regular}>Подумай как это будет работать на разных разрешениях и при
									скролле</p>
							</div>
						</div>
					</div>
					<div className={s.item}>
						<div>
							<img src={secure} alt="secure" />
						</div>
						<div className={s.infoWrapper}>
							<div>
								<p className={s.bold}>Сделай хорошо</p>
							</div>
							<div>
								<p className={s.regular}>Чтобы мы могли тебе доверить подобные задачи в будущем</p>
							</div>
						</div>
					</div>
					<div className={s.item}>
						<div>
							<img src={money} alt="money" />
						</div>
						<div className={s.infoWrapper}>
							<div>
								<p className={s.bold}>Получи предложение</p>
							</div>
							<div>
								<p className={s.regular}>Ну тут все просто, не я придумал правила, но думаю так и
									будет)))</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="thirdBlock" className={s.thirdBlock}>
				<div className={s.leftSide}>
					<h3 className={s.h3}>Круто, ты дошел до третьего блока</h3>
					<p>
						63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы
						свыше 15 000 ₽.
					</p>
					<p>
						Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и
						штрафах.
					</p>
				</div>
				<div className={s.rightSide}>
					<img src={manAndTruck} alt="manAndTruck" />
				</div>
			</div>
		</div>
	);
}