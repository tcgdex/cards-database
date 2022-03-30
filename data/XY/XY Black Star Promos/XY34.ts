import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Metagross EX",
		fr: "Métalosse EX",
	},
	illustrator: "PLANETA",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 180,
	types: [
		"Metal",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Magnetic Laser",
				fr: "Laser Magnétique",
			},
			effect: {
				en: "You may move a Metal Energy from 1 of your Benched Pokémon to this Pokémon.",
				fr: "Vous pouvez déplacer une Énergie Metal de l'un de vos Pokémon de Banc vers ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Squared Attack",
				fr: "Attaque Carrée",
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "50×",

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
			type: "Psychic",
			value: "−20"
		},
	],
	retreat: 4,



}

export default card
