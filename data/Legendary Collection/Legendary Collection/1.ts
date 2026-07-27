import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Alakazam"
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
		en: "Kadabra"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Damage Swap"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is affected by a Special Condition."
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
				en: "Confuse Ray"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused."
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
		en: "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000."
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
