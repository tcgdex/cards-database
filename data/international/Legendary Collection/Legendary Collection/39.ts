import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Dark Wartortle"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [8],

	hp: 60,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Squirtle"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Doubleslap"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Mirror Shell"
			},
			effect: {
				'en-us': "If an attack does damage to Dark Wartortle during your opponent's next turn (even if Dark Wartortle is Knocked Out), Dark Wartortle does an equal amount of damage to the Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A Pokémon with a negative attitude, it hides in its shell whenever it's in a bad mood—which is often."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274804,
				tcgplayer: 84669
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84669,
				cardmarket: 274804
			}
		}
	],

}

export default card
