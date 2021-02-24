import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Graveler",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		75,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Geodude",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Rock Cannon",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Slide",
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],




}

export default card
