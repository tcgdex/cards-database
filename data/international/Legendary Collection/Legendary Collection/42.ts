import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Fearow"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [22],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Spearow"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Agility"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Fearow."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drill Peck"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "With its huge and magnificent wings, it can keep aloft without ever having to land for rest."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274807,
				tcgplayer: 85395
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85395,
				cardmarket: 274807
			}
		}
	],

	retreat: 0
}

export default card
