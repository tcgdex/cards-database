import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土地雲"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "狡兔三窟"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "大地轟然"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的所有能量，以任意方式改附於備戰寶可夢身上。"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card