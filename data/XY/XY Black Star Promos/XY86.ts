import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Blaziken EX",
		fr: "M Braségali EX",
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 210,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Blaziken-EX",
		fr: "Braségali-eEX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moonsault Blaze",
				fr: "Brasier Sélénite",
			},
			effect: {
				en: "During your next turn, this Pokémon's Moonsault Blaze attack does 100 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Brasier Sélénite de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
