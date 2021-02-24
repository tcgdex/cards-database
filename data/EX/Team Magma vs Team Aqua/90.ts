import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Cradily ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		346,
	],
	hp: 150,
	types: [
		"Grass",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Vibes",
			},
			effect: {
				en: "As long as Cradily ex is your Active Pokémon, your opponent can't play a Pokémon from his or her hand to evolve his or her Active Pokémon.",
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
				en: "Eerie Light",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Acidic Poison",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned and Burned.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
