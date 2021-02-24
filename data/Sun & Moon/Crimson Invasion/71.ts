import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},
	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		39,
	],
	hp: 60,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
			},

			damage: 10,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

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
