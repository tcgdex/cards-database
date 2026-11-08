import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Entei",
		'fr-fr': "Entei"
	},

	illustrator: "kodama",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [244],
	hp: 110,
	types: ["Fire"],

	description: {
		'en-us': "A Pokémon that races across the land. It is said\nthat one is born every time a new volcano appears.",
		'fr-fr': "Un Pokémon qui parcourt le monde. On dit qu'il en naît un à chaque fois qu'un volcan apparaît."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Strong Flare",
			'fr-fr': "Flamboiement Intense"
		},

		damage: 110,
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If tails, discard 2 random Energy from this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est pile, défaussez au hasard 2 Énergies de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card