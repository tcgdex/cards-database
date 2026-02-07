import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		653,
	],
	set: Set,
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Fennekin",
		fr: "Feunnec",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fire",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110408,
	},
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Griffe",
			},
			damage: "10",
		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Charbon Mutant",
			},
			damage: "20",
		},
	],
}

export default card
