import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'de-de': "Sichlor"
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
				'en-us': "Fury Cutter",
				'fr-fr': "Taillade",
				'de-de': "Fury Cutter"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 10 damage plus 10 more damage if exactly 1 is heads, or 20 more damage if exactly 2 are heads, or 40 more damage if exactly 3 are heads, or 80 more damage if all 4 are heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires si c'est 1 face, ou 20 dégâts supplémentaires si c'est 2 faces, ou 40 dégâts supplémentaires si c'est 3 faces, ou 80 dégâts supplémentaires si c'est 4 faces.",
				'de-de': "Flip 4 coins. This attack does 10 damage plus 10 more damage if exactly 1 are heads, or 20 more damage if exactly 2 are heads, or 40 more damage if exactly 3 are heads, or 80 more damage if all 4 are heads."
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
	retreat: 1,


	description: {
		'en-us': "It slashes through grass with its sharp scythes, moving too fast for the human eye to track.",
		'fr-fr': "Il se fraie un chemin dans les herbes avec ses cisailles, trop rapidement pour qu'un être humain puisse le suivre."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274557,
				tcgplayer: 88994
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274557,
				tcgplayer: 88994
			}
		}
	]
}

export default card

