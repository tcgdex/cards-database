import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [548],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "The leaves on its head grow right back even if\nthey fall out. These bitter leaves refresh those\nwho eat them.",
		'fr-fr': "Les feuilles sur sa tête repoussent très vite. Elles sont fort amères, mais elles revigorent les corps les plus éreintés."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card