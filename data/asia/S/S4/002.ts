import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長鼻葉"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "棲息在森林深處。會用頭上的葉子做成笛子，吹出令人感到不安的音色。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "飛葉快刀"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card