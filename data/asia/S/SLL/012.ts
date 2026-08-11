import { Card } from "../../../interfaces"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "先機球",
		ja: "クイックボール"
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡必須將自己的1張手牌丟棄才可使用。從自己的牌庫選擇1張【基礎】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "このカードは、自分の手札を1枚トラッシュしなければ使えない。\n\n自分の山札からたねポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card