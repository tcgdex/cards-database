import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali",
		es: "Jolteon",
		it: "Jolteon",
		pt: "Jolteon",
		de: "Blitza"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eevee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Electrigun",
			},
			effect: {
				en: "You may discard a Lightning Energy attached to this Pokémon. If you do, this attack does 40 more damage.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
			},
			effect: {
				en: "Flip 4 coins. This attack does 40 damage times the number of heads.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 280365
	}
}

export default card
