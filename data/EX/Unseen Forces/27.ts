import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
		de: "Ho-oh"
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
				en: "Gust",
				fr: "Tornade",
				de: "Gust"
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
				en: "Sacred Fire",
				fr: "Feu sacré",
				de: "Sacred Fire"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Lancez une pièce. Si c'est face, choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 60 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance."
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
