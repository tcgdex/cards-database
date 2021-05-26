import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Brock's Graveler",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		75,
	],
	hp: 70,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Geodude",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
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
				en: "Detonate",
			},
			effect: {
				en: "Does 10 damage to each Pokémon on each player's bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Brock's Graveler does 50 damage to itself. If there is a Stadium card in play, discard it.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
