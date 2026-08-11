import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [60],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "For Poliwag, swimming is easier than walking.\nThe swirl pattern on its belly is actually part of\nthe Pokémon's innards showing through the skin.",
		'fr-fr': "Il est plus à l'aise dans l'eau que sur la terre ferme. Le motif de spirale sur son ventre est en fait une partie de ses organes visibles à travers la peau."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Put 1 random Poliwag from your deck onto your Bench.",
			'fr-fr': "Placez une carte  au hasard de votre deck sur votre Banc."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card