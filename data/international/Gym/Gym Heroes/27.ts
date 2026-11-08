import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Lt. Surge's Electabuzz"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [125],

	hp: 60,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Elekid"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Charge"
			},
			effect: {
				'en-us': "Take up to 2 Lightning Energy cards from your discard pile and attach them to Lt. Surge's Electabuzz."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Electric Current"
			},
			effect: {
				'en-us': "Take 1 Lightning Energy card attached to Lt. Surge's Electabuzz and attach it to 1 of your Benched Pokémon. If you have no Benched Pokémon, discard that Energy card."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86852,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86852,
				cardmarket: 274142
			}
		}
	],
}

export default card

