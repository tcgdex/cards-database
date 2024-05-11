import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛毛角羊"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "長得長長的角是為了向異性求愛而存在的。牠從不會把角當作武器。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "彈跳"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "滾動衝撞"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card