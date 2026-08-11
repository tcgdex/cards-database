import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "索羅亞"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "平常很愛說話的孩子如果突然變得很沉默，就有可能是索羅亞假扮的。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "後踢"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card