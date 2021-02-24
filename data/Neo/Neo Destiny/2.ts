import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Crobat",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Zubat",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Surprise Bite",
			},
			effect: {
				en: "When you play Dark Crobat from your hand, you may choose 1 of your opponent's Pokémon. This power does 20 damage do that Pokémon. (Don't apply Weakness and Resistance.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Dark Drain",
			},
			effect: {
				en: "Flip a coin for each of your opponent's Pokémon. For each heads, this attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance. Remove a number of damage counters from Dark Crobat equal to the damage dealt. If Dark Crobat has fewer damage counters than that, remove all of them.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
