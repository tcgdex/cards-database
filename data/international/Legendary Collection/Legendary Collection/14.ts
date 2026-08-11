import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Jolteon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [135],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Eevee"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Pin Missle"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It accumulates negative ions from the atmosphere to blast out 10,000-volt lightning bolts."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274779,
				tcgplayer: 86339
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86339,
				cardmarket: 274779
			}
		}
	],

}

export default card
