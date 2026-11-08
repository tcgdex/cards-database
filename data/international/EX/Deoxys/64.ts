import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'de-de': "Karpador"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Leap Out",
				'fr-fr': "Bondir",
				'de-de': "Leap Out"
			},
			effect: {
				'en-us': "Switch Magikarp with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Magicarpe avec 1 des Pokémon de votre Banc.",
				'de-de': "Switch Magikarp with 1 of your Benched Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Rage"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Magikarp.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Magicarpe.",
				'de-de': "Does 10 damage plus 10 more damage for each damage counter on Magikarp."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87028,
				cardmarket: 276467
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87028,
				cardmarket: 276467
			},
		},
	],

}

export default card
