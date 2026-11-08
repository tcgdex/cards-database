import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Ho-Oh",
		'fr-fr': "Ho-Oh",
		'de-de': "Ho-oh"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'de-de': "Gust"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sacred Fire",
				'fr-fr': "Feu sacré",
				'de-de': "Sacred Fire"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 60 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86122,
				cardmarket: 276673
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86122,
				cardmarket: 276673
			},
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 181559,
			},
		},
		{
			type: "normal",
			languages: ['it'],
			stamp: ["pokemon-day"],
		}
	],
}

export default card
