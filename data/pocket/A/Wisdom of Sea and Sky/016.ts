import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [191],
	hp: 40,
	types: ["Grass"],

	description: {
		'en-us': "It suddenly falls out of the sky in the morning.\nKnowing it's weak, it simply feeds until it evolves.",
		'fr-fr': "Ce Pokémon tombe soudainement du ciel le matin. Conscient de sa faible constitution, il ne fait que se nourrir jusqu'à ce qu'il évolue."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Blot",
			'fr-fr': "Pâté"
		},

		damage: 20,
		cost: ["Grass"],

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card