import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu"
	},

	illustrator: "Gakuji Nomoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre",
				de: "Donnerblitz"
			},
			effect: {
				en: "Discard all Energy cards attached to Pikachu in order to use this attack.",
				fr: "Défaussez toutes les cartes Énergie attachées à Pikachu.",
				de: "Lege alle Energiekarten, die an Pikachu angelegt sind, ab."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It uses its sensitive tail to sense its environment and has been known to react violently if its tail is grabbed.",
		fr: "Il utilise sa queue sensible pour explorer son environnement et réagit violemment si on l'attrape par la queue.",
		de: "Es benutzt seinen empfindlichen Schwanz, um seine Umwelt wahrzunehmen, und reagiert äußerst gereizt, wenn man es am Schwanz packt."
	},

	variants: [
		{
			type: "normal",
			stamp: ["pikachu-tail"],
			thirdParty: {
				tcgplayer: 161753
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88068
			},
		}
	]
}

export default card
