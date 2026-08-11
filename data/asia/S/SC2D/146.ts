import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶可夢捕捉器"
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'zh-tw': "擲1次硬幣若為正面，則選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。"
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card
