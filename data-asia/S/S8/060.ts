import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 直衝熊"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'zh-tw': "有著十分好戰的性情。即使是比自己強的對手也會魯莽地發起挑戰。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "後踢"
		},

		damage: 30,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card