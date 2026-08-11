import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [148],
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Dratini"
	},

	description: {
		'en-us': "They say that if it emits an aura from its whole\nbody, the weather will begin to change instantly.",
		'fr-fr': "On dit que lorsque tout son corps émet une aura, les conditions climatiques se mettent à changer à vue d'œil."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Waterfall",
			'fr-fr': "Cascade"
		},

		damage: 60,
		cost: ["Water", "Lightning"]
	}],

	retreat: 1
}

export default card