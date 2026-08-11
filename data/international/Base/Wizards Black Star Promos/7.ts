import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Jigglypuff",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		39,
	],
	hp: 70,
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
				en: "First Aid",
			},
			effect: {
				en: "Remove 1 damage counter from Jigglypuff.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
			},
			effect: {
				en: "Jigglypuff does 20 damage to itself.",
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
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86309
			},
		},
	]

}

export default card
