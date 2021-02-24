import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Makuhita",
	},
	illustrator: "Asuka Iwashita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		296,
	],
	hp: 50,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thrust",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, discard 1 Energy card attached to the Defending Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
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





}

export default card
