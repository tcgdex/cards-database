import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼鯨王"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	description: {
		'zh-tw': "有時會讓大大的身體在波浪上跳躍，藉此製造出衝擊讓對手昏迷。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "泡沫吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "重磅衝擊"
		},

		damage: 180,
		cost: ["Water", "Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card