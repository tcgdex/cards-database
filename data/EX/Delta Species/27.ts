import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Sandslash δ",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 80,
	types: [
		"Fightning",
		"Metal",
	],
	evolveFrom: {
		en: "Sandshrew",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Storm",
			},
			effect: {
				en: "As long as Sandslash is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon-ex between turns.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Rend",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 20 damage plus 20 more damage.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
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
