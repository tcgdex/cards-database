import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Ambipom",
		fr: "Capidextre",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		424,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Aipom",
		fr: "Capumain",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nice-Nice Catch",
				fr: "Jolie Jolie Prise",
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bye-Bye Throw",
				fr: "Lancer Ciao Ciao",
			},
			effect: {
				en: "Discard up to 2 cards from your hand. This attack does 60 damage for each card you discarded in this way.",
				fr: "Défaussez jusqu’à 2 cartes de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
