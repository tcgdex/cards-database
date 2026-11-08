import { Card } from 'models/database/card'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		'en-us': "Primeape",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mankey",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Low Kick",
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Rampage",
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each damage counter on Primeape. Flip a coin. If tails, Primeape is now Confused (after doing damage).",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "This Pokémon only calms down when there are no other animals or people around—which means no one has ever seen it when it's not angry.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275648,
				tcgplayer: 46475
			}
		}
	]
}

export default card
