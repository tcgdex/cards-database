import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Latios",
		'fr-fr': "Latios"
	},

	illustrator: "kodama",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [381],
	hp: 110,
	types: ["Psychic"],

	description: {
		'en-us': "It understands human speech and is highly\nintelligent. It is a tender Pokémon that\ndislikes fighting.",
		'fr-fr': "Un Pokémon très intelligent qui comprend le langage humain. Il déteste se battre."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fantastical Floating",
			'fr-fr': "Lévitation Onirique"
		},

		effect: {
			'en-us': "If you have Latias in play, this Pokémon has no Retreat Cost.",
			'fr-fr': "Si vous avez  en jeu, ce Pokémon n'a aucun Coût de Retraite."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Luster Purge",
			'fr-fr': "Lumi-Éclat"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Psychic"],

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card