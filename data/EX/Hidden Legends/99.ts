import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Registeel ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		379,
	],
	hp: 90,
	types: [
		"Metal",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
			},
			effect: {
				en: "Any damage done to Registeel ex by attacks is reduced by 10 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Wave",
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Benched Pokémon of the same type as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 50,

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
