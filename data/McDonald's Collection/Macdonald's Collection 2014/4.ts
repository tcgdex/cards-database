import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		656,
	],
	set: Set,
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Froakie",
		fr: "Grenousse",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110409,
	},
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Écras'Face",
			},
			damage: "10",
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				fr: "Goutte à Goutte",
			},
			damage: "20",
		},
	],
}

export default card
