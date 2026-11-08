import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Alakazam"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [65],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Kadabra"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Damage Swap"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Confuse Ray"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused."
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
	retreat: 3,


	description: {
		'en-us': "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274766,
				tcgplayer: 83496
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83496,
				cardmarket: 274766
			}
		},
	],

}

export default card
