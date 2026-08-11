import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Zapdos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [145],

	hp: 90,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Zapdos does 30 damage to itself."
			},
			damage: 60,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunderbolt"
			},
			effect: {
				'en-us': "Discard all Energy cards attached to Zapdos or this attack does nothing."
			},
			damage: 100,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		'en-us': "A legendary bird Pokémon said to appear from clouds while wielding enormous lightning bolts."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274784,
				tcgplayer: 90712
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90712,
				cardmarket: 274784
			}
		}
	],

}

export default card
