import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		722,
	],
	set: Set,
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
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
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
				en: "Leafage",
				fr: "Feuillage",
			},
			damage: "20",
		},
	],

	illustrator: "Megumi Mizutani",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301843,
				tcgplayer: 152681
			}
		}
	]
}

export default card

