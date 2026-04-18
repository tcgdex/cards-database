import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [66],
	set: Set,

	name: {
		en: "Machop"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting", "Colorless",
			],
			name: {
				en: "Dynamic Chop",
			},
			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],

	retreat: 2,

	illustrator: "Masakazu Fukuda",	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366774,
				tcgplayer: 180454
			}
		}
	]
}

export default card

