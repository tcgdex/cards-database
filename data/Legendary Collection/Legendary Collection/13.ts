import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Hitmonlee"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [106],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Stretch Kick"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon, and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "High Jump Kick"
			},

			damage: 50,

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
		en: "When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274778,
				tcgplayer: 86101
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86101,
				cardmarket: 274778
			}
		}
	],

}

export default card
