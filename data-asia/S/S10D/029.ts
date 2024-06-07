import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 卡蒂狗"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "兩隻一組共同負責地盤的警戒工作。體毛中混有火成岩的成分，可以 推想這是受到火山活動的影響。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "防禦姿勢"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。"
		}
	}, {
		name: {
			'zh-tw': "咬住"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card