import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨牙鯊"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "會將吞下的海水從臀部的孔中噴出，藉此來游動。對血的氣味非常敏感。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "銳利之牙"
		},

		damage: 70,
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