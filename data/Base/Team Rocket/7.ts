import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Golbat",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		42,
	],
	hp: 50,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Zubat",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sneak Attack",
			},
			effect: {
				en: "When you play Dark Golbat from your hand, you may choose 1 of your opponent's Pokémon. If you do, Dark Golbat does 10 damage to that Pokémon. Apply Weakness and Resistance.",
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
				en: "Flitter",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
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
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
