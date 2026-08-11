import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pikachu",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 30,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thundershock",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Agility",
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Pikachu.",
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

	description: {
		'en-us': "When several of these Pokémon gather, their electricity can cause lightning storms.",
	},

	variants: [
		{
			type: "normal",
			stamp: ["pikachu-tail"],
			thirdParty: {
				tcgplayer: 161747
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88069
			},
		}
	]
}

export default card
