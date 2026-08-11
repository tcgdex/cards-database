import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Nidoran ♂"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [32],
	hp: 40,
	types: [
		"Grass"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Horn Hazard"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Stiffens its ears to sense danger. The larger, more powerful of its horns secretes venom."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87724
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87724
			}
		},
	]
}

export default card
