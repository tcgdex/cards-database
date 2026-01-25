import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2017'

const card: Card = {
	dexId: [
		722,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false,
	},
	name: {
		en: "Rowlet",
		fr: "Brindibou",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 152681,
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
				"Grass",
				"Colorless",
			],
			name: {
				fr: "Feuillage",
			},
			damage: "20",
		},
	],
}

export default card
