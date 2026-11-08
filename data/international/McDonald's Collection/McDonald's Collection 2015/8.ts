import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		111,
	],
	set: Set,
	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
			},
			damage: 40,
			effect: {
				'en-us': "This Pokémon does 10 damage to itself",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
			},
		},
	],

	illustrator: "Midori Harada",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293324,
				tcgplayer: 110426
			}
		}
	]
}

export default card

