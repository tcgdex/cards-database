import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "齒輪兒"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],

	description: {
		'zh-tw': "２個身體比雙胞胎還要親近。要是換成別的齒輪兒， 就沒有辦法好好咬合。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "夾住"
		},

		damage: 10,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 20,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card