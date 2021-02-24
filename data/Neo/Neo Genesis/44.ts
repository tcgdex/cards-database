import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Piloswine",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		221,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Swinub",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Freeze",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack. (Benching or evolving the Defending Pokémon ends this effect.)",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Blizzard",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
