import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Latios",
		fr: "Latios"
	},

	illustrator: "kodama",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [381],
	hp: 110,
	types: ["Psychic"],

	description: {
		en: "It understands human speech and is highly\nintelligent. It is a tender Pokémon that\ndislikes fighting.",
		fr: "Un Pokémon très intelligent qui comprend le langage humain. Il déteste se battre."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fantastical Floating",
			fr: "Lévitation Onirique"
		},

		effect: {
			en: "If you have Latias in play, this Pokémon has no Retreat Cost.",
			fr: "Si vous avez  en jeu, ce Pokémon n'a aucun Coût de Retraite."
		}
	}],

	attacks: [{
		name: {
			en: "Luster Purge",
			fr: "Lumi-Éclat"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Psychic"],

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card