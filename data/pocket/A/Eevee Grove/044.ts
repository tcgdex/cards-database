import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [302],
	hp: 70,
	types: ["Darkness"],

	description: {
		'en-us': "Materials from gems it has eaten float to the\nsurface of its body and can form an infinite\nnumber of patterns among individuals.",
		'fr-fr': "Les éléments présents dans les gemmes qu'il mange remontent à la surface de son corps, formant des motifs d'une infinie variété."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe"
		},

		damage: 30,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card