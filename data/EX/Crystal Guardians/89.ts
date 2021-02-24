import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Aggron ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Lairon",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Armor",
			},
			effect: {
				en: "As long as Aggron ex is your Active Pokémon, your opponent's Basic Pokémon can't attack or use any Poké-Powers or Poké-Bodies.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Split Bomb",
			},
			effect: {
				en: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Burn",
			},
			effect: {
				en: "During your next turn, Aggron ex can't use Mega Burn.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
