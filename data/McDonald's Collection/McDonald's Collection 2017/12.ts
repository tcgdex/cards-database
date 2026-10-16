import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		734,
	],
	set: Set,
	name: {
		en: "Yungoos",
		fr: "Manglouton",
		de: "Mangunior"
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},
			damage: "10",
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},
			damage: "20",
		},
	],

	illustrator: "match",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301854,
				tcgplayer: 152693
			}
		}
	]
}

export default card

