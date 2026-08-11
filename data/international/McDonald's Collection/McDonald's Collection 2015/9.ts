import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		307,
	],
	set: Set,
	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Fighting",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Smack",
				'fr-fr': "Claque",
			},
			damage: "20",
		},
	],

	illustrator: "sui",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293325,
				tcgplayer: 110425
			}
		}
	]
}

export default card

