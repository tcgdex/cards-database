import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eevee",
		'es-es': "Eevee"
	},

	illustrator: "nisimono",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment.",
		'es-es': "Es capaz de evolucionar de muchas maneras\npara adaptarse sin problemas a cualquier medio."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'es-es': "Placaje"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card