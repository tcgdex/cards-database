import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Pikachu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Spark"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 20,

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
		'en-us': "When several of these Pokémon gather, their electricity can build and cause lightning storms."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274851,
				tcgplayer: 88075
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88075,
				cardmarket: 274851
			}
		}
	],

}

export default card
