import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 90,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Happy Mime",
				fr: "Mime Heureux",
			},
			effect: {
				en: "Each player draws a card.",
				fr: "Chaque joueur pioche une carte.",
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			},
			damage: "40×",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
