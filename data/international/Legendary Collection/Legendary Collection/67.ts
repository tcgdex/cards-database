import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Abra"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [63],

	hp: 30,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psyshock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		'en-us': "Using its ability to read minds, it will identify impending danger and teleport to safety."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274832,
				tcgplayer: 83446
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83446,
				cardmarket: 274832
			}
		}
	],

	retreat: 0
}

export default card
