import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夜盜火蜥"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "用尾巴上的火焰燃燒毒囊裡製造出的體液，生成出毒氣。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "濁霧"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
