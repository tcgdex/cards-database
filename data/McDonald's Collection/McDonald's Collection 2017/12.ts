import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		734,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false,
	},
	name: {
		en: "Yungoos",
		fr: "Manglouton",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless",
	],
	stage: "Basic",
	thirdParty: {
		cardmarket: 301854,
		tcgplayer: 152693,
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
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Morsure",
			},
			damage: "20",
		},
	],
}

export default card
