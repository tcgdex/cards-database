import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獨劍鞘"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "很久以前因這把劍而喪命之人的靈魂成為了獨劍鞘的靈魂。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "利刃切割"
		},

		damage: 30,
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
	regulationMark: "D"
}

export default card
