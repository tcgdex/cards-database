import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		728,
	],
	set: Set,
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
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Pound",
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
				en: "Water Gun",
				fr: "Pistolet à O",
			},
			damage: "20",
		},
	],

	illustrator: "Kouki Saitou",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301846,
				tcgplayer: 152684
			}
		}
	]
}

export default card
