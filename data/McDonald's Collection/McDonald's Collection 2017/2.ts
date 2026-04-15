import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		736,
	],
	set: Set,
	name: {
		en: "Grubbin",
		fr: "Larvibule",
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
				en: "Vice Grips",
				fr: "Force Poigne",
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
