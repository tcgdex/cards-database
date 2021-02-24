import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Latios",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 90,
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
				en: "Energy Draw",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Latios. Shuffle your deck afterward.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Luster Purge",
			},
			effect: {
				en: "Discard 3 Energy attached to Latios.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
