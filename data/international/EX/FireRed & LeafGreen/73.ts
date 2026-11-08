import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Pidgey",
		'fr-fr': "Roucool",
		'de-de': "Taubsi"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		16,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Corner",
				'fr-fr': "Angle",
				'de-de': "Corner"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire.",
				'de-de': "The Defending Pokémon can't retreat until the end of your opponent's next turn."
			},

		},
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
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276249,
				tcgplayer: 88048
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276249,
				tcgplayer: 88048
			},
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871518,
				tcgplayer: 477564
			},
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"],
			thirdParty: {
				cardmarket: 871517,
				tcgplayer: 477565
			},
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				cardmarket: 869523,
				tcgplayer: 477889
			},
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				cardmarket: 869524,
				tcgplayer: 477890
			},
		},
	],
}

export default card
