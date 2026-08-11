import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Magneton"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [82],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Magnemite"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Sonicboom"
			},
			effect: {
				'en-us': "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Selfdestruct"
			},
			effect: {
				'en-us': "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magneton does 100 damage to itself."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Formed by several Magnemites linked together. They frequently appear when sunspots flare up."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274793,
				tcgplayer: 87099
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87099,
				cardmarket: 274793
			}
		}
	],

}

export default card
