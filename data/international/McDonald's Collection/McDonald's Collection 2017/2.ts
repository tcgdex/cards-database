import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		736,
	],
	set: Set,
	name: {
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Grass",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vice Grips",
				'fr-fr': "Force Poigne",
			},
			damage: "20",
		},
	],

	illustrator: "Akira Komayama",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301844,
				tcgplayer: 152682
			}
		}
	]
}

export default card

