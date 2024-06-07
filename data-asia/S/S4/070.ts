import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑眼鱷"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "因為還不太擅長狩獵，主要是吃倒斃在沙漠裡的東西維生，被稱為沙漠的清道夫。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "亂挖"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方3張卡丟棄。"
		},

		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card