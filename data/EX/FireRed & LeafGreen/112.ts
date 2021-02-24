import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Venusaur ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 150,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ivysaur",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Trans",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Venusaur ex is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pollen Hazard",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned, Burned, and Confused.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solarbeam",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
