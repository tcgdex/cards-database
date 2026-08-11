import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'de-de': "Eneco"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [300],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Plus Energy",
				'fr-fr': "Énergie plus",
				'de-de': "Bonusenergie"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre main à un de vos Pokémon.",
				'de-de': "Lege 1 Basis Energiekarte an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275718,
				tcgplayer: 89260
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275718,
				tcgplayer: 89260
			}
		},
	],

}

export default card
