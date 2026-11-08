import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Electrode"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [101],

	hp: 90,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Voltorb"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Chain Lightning"
			},
			effect: {
				'en-us': "If the Defending Pokémon isn't Colorless, this attack does 10 damage to each Benched Pokémon of the same type as the Defending Pokémon (including your own). (Don't apply Weakness and Resistance for Benched Pokémon.)"
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
		'en-us': "It stores electrical energy under very high pressure. It often explodes with little or no provocation."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274787,
				tcgplayer: 85151
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85151,
				cardmarket: 274787
			}
		}
	],

}

export default card
