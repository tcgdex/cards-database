import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2015'

const card: Card = {
	dexId: [
		183,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Marill",
		fr: "Marill",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fairy",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110430,
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Charge",
			},
			damage: "10",
		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				fr: "Roulade",
			},
			damage: "20",
		},
	],
}

export default card
