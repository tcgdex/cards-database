import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin"
	},

	illustrator: "Toshinao Aoki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [191],
	hp: 50,
	types: ["Grass"],

	description: {
		'en-us': "It suddenly falls out of the sky in the morning.\nKnowing it's weak, it simply feeds until it evolves.",
		'fr-fr': "Ce Pokémon tombe soudainement du ciel le matin. Conscient de sa faible constitution, il ne fait que se nourrir jusqu'à ce qu'il évolue."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card