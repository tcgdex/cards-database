import { Card } from "../../../interfaces"
import Set from "../SVC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶可夢捕捉器"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card