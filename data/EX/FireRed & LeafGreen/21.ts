import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Dodrio",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		85,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Doduo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Retreat Aid",
			},
			effect: {
				en: "As long as Dodrio is on your Bench, you pay Colorless Colorless less to retreat your Active Pokémon (excluding Pokémon-ex and Baby Pokémon).\"",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tri Attack",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
