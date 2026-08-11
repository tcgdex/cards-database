import { Card } from 'models/database/card'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		'en-us': "Bibarel"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [400],

	hp: 90,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Bidoof"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rollout"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278857,
				tcgplayer: 83820
			},
		}
	]
}

export default card
