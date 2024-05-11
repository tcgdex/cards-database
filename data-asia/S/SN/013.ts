import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "能量輸送",
		ja: "エネルギー転送"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇1張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "自分の山札から基本エネルギーを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "F"
}

export default card