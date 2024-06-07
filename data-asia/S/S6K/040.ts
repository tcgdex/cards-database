import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "好勝蟹"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "有時會錯把椰蛋樹當成椰子樹而爬上去。惹怒椰蛋樹的牠會被甩下來並遭到踩踏。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "打擊"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "雙重金勾臂"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×40點傷害。"
		},

		damage: "40×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card