import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Drilbur",
		fr: "Rototaupe",
	},
	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		529,
	],
	hp: 70,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hone Claws",
				fr: "Aiguisage",
			},
			effect: {
				en: "During your next turn, each of this Pokémon's attacks does 30 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
