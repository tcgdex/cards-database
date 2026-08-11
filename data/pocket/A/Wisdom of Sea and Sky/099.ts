import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [231],
	hp: 70,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon lives and nests on a riverbank.\nAfter playing in the mud, it won't be able to\nsettle down unless it washes its body.",
		'fr-fr': "Les Phanpy vivent dans les trous qu'ils creusent, près des rivières. Après avoir joué dans la boue, ils ont besoin de faire leur toilette pour se calmer."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente"
		},

		damage: 30,
		cost: ["Fighting"],

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card