import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2017'

const card: Card = {
	dexId: [
		739,
	],
	set: Set,
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 152687,
	},
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Koud'Poing",
			},
			damage: "20",
		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Pince-Masse",
			},
			damage: "40",
		},
	],
}

export default card
