import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Tropius",
		'fr-fr': "Tropius",
		'de-de': "Tropius"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [357],

	hp: 90,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Fresh-Picked Fruit",
				'fr-fr': "Fruit frais",
				'de-de': "Frisches Obst"
			},
			effect: {
				'en-us': "Remove 6 damage counters from 1 of your Benched Pokémon.",
				'fr-fr': "Retirez 6 marqueurs de dégât à l’un des Pokémon de votre Banc.",
				'de-de': "Entferne 6 Schadensmarken von 1 Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cutting Wind",
				'fr-fr': "Vent glacial",
				'de-de': "Schneidender Wind"
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
		'en-us': "The bunch of fruit around its neck ripens twice a year and is delicious. It’s a highly favored tropical snack."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279275,
				tcgplayer: 90062
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279275,
				tcgplayer: 90062
			}
		}
	],

}

export default card
