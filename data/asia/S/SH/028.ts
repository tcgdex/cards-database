import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拳拳蛸"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "智商大致相當於３歲的兒童。雖然觸手經常斷掉，但因為能再生，所以牠並不在意。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "敲擊"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "拳骨"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card