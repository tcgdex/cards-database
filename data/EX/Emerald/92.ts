import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Camerupt ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Numel",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Magma Armor",
			},
			effect: {
				en: "Camerupt ex can't be Asleep or Paralyzed.",
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
				en: "Searing Flame",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Eruption",
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 60 damage plus 20 more damage for each Energy card discarded in this way.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
