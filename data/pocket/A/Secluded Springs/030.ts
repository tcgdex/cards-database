import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Yamper",
		'fr-fr': "Voltoutou"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [835],
	hp: 60,
	types: ["Lightning"],

	description: {
		'en-us': "This gluttonous Pokémon only assists people with\ntheir work because it wants treats. As it runs,\nit crackles with electricity.",
		'fr-fr': "Ce glouton assiste les humains dans leur travail en échange de friandises. Il court sans arrêt, le corps enveloppé d'électricité."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Zap Kick",
			'fr-fr': "Coup de Pied Ravageur"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card