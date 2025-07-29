import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Venusaur",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ivysaur",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Wide Solarbeam",
			},
			effect: {
				en: "Does 20 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Hard Plant",
			},
			effect: {
				en: "Venusaur can’t use Hard Plant during your next turn.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	retreat: 3,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277437
	}
}

export default card
