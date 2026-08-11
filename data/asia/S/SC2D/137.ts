import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "先機球"
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡必須將自己的1張手牌丟棄才可使用。 從自己的牌庫選擇1張【基礎】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card
