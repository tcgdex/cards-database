import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		de: "Sichlor"
	},

	illustrator: "Kimiya Masago",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
				de: "Fury Cutter"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage plus 10 more damage if exactly 1 is heads, or 20 more damage if exactly 2 are heads, or 40 more damage if exactly 3 are heads, or 80 more damage if all 4 are heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires si c'est 1 face, ou 20 dégâts supplémentaires si c'est 2 faces, ou 40 dégâts supplémentaires si c'est 3 faces, ou 80 dégâts supplémentaires si c'est 4 faces.",
				de: "Flip 4 coins. This attack does 10 damage plus 10 more damage if exactly 1 are heads, or 20 more damage if exactly 2 are heads, or 40 more damage if exactly 3 are heads, or 80 more damage if all 4 are heads."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il se fraie un chemin dans les herbes avec ses cisailles, trop rapidement pour qu'un être humain puisse le suivre."
	}
}

export default card
