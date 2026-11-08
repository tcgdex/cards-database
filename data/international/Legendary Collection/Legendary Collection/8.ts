import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Dark Slowbro"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [80],

	hp: 60,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Slowpoke"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Reel In"
			},
			effect: {
				'en-us': "When you play Dark Slowbro from your hand, choose up to 3 Basic Pokémon and/or Evolution cards from your discard pile and put them into your hand."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Fickle Attack"
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
	retreat: 2,


	description: {
		'en-us': "It loves nothing better than to be left alone, and so sometimes ends up being manipulated by unscrupulous people."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274773,
				tcgplayer: 84653
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84653,
				cardmarket: 274773
			}
		}
	],

}

export default card
