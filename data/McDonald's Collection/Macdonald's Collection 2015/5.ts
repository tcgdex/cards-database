import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2015'

const card: Card = {
	dexId: [
		258,
	],
	set: Set,
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Mudkip",
		fr: "Gobou",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110427,
	},
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Charge",
			},
			damage: "10",
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				fr: "Coud'Boue",
			},
			damage: "20",
		},
	],
}

export default card
