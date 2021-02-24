import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
	},
	illustrator: "Takao Unno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		50,
	],
	hp: 50,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Down Draw",
				fr: "Pioche du dessous",
			},
			effect: {
				en: "Draw a card from the bottom of your deck.",
				fr: "Piochez une carte du dessous de votre deck.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Mud Spatter",
				fr: "Éclaboussure de boue",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
