import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Plusle",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cheer Up",
			},
			effect: {
				en: "Draw a card. If you have Minun in play, draw 2 cards instead.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Positive Ion",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Body Bolt",
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon that has any Poké-Bodies. This attack does 30 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			}

		},
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277453
	}
}

export default card
