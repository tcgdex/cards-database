import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Tropius",
		fr: "Tropius",
		de: "Tropius"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		357,
	],

	hp: 90,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Fresh-Picked Fruit",
				fr: "Fruit frais",
				de: "Frisches Obst"
			},
			effect: {
				en: "Remove 6 damage counters from 1 of your Benched Pokémon.",
				fr: "Retirez 6 marqueurs de dégât à l’un des Pokémon de votre Banc.",
				de: "Entferne 6 Schadensmarken von 1 Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent glacial",
				de: "Schneidender Wind"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "The bunch of fruit around its neck ripens twice a year and is delicious. It’s a highly favored tropical snack."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 279275,
		tcgplayer: 90062
	}
}

export default card
