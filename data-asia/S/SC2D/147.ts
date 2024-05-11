import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "破舊電腦"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "擲2次硬幣，若全部為正面，則從自己的棄牌區任意選擇1張卡，在給對手看過後加入手牌。"
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card
