import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Hypno"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [97],

	hp: 90,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Drowzee"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Prophecy"
			},
			effect: {
				'en-us': "Look at up to 3 cards from the top of either player's deck and rearrange them as you like."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Dark Mind"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 30,

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
		'en-us': "When it locks eyes with an enemy, it will use a mix of psi moves such as Hypnosis and Confusion."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274790,
				tcgplayer: 86251
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86251,
				cardmarket: 274790
			}
		}
	],

}

export default card
