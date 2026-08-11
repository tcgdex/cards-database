import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Vaporeon",
		'fr-fr': "Aquali obscur",
		'de-de': "Dunkles Aquana"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Bite"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Whirlpool",
				'fr-fr': "Tourbillon",
				'de-de': "Whirlpool"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
				'fr-fr': "Si le Pokémon Défenseur a au moins 1 carte Énergie attachée à lui, choisissez l'une d'elle et défaussez-la.",
				'de-de': "If the Defending Pokémon has any Energy attached to it, choose 1 of them and discard it."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A Pokémon capable of controlling water, so it is capable of creating giant whirlpools.",
		'fr-fr': "Ce Pokémon est capable de contrôler l'eau, il est de ce fait capable de créer des tourbillons géants."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274098,
				tcgplayer: 84665
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274098,
				tcgplayer: 84665
			}
		}
	]
}

export default card
