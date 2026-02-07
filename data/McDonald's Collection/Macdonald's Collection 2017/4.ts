import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2017'

const card: Card = {
	dexId: [
		728,
	],
	set: Set,
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Popplio",
		fr: "Otaquin",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Water",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 152684,
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
				fr: "Pistolet à O",
			},
			damage: "20",
		},
	],
}

export default card
