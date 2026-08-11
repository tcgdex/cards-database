import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Pidgeotto",
		fr: "Roucoups",
		de: "Tauboga"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		17,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pidgey",
		fr: "Roucool"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Clutch",
				fr: "Serre",
				de: "Clutch"
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire.",
				de: "The Defending Pokémon can't retreat until the end of your opponent's next turn."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent glacial",
				de: "Cutting Wind"
			},

			damage: 30,

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


	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276221,
				tcgplayer: 88040
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276221,
				tcgplayer: 88040
			},
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871520,
				tcgplayer: 477562
			},
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"],
			thirdParty: {
				cardmarket: 871519,
				tcgplayer: 477563
			},
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				cardmarket: 869521,
				tcgplayer: 477884
			},
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				cardmarket: 869522,
				tcgplayer: 477886
			},
		},
	],
}

export default card
