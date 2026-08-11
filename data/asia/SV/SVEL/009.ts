import { Card } from "../../../interfaces"
import Set from "../SVEL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超級能量回收"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡必須將自己的2張手牌丟棄才可使用。 從自己的棄牌區選擇最多4張基本能量卡，在給對手看過後加入手牌。（不可選擇因這張卡的效果而丟棄的能量卡。）"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card