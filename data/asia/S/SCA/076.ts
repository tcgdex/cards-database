import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "種子鐵球"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "會發射尖刺來保護自己。需要反覆訓練才能將尖刺準確地射中目標。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "反動"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 10,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card