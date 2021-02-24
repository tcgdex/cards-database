import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Venusaur",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ivysaur",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Floral Scent",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Powder",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 70,

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
			type: "Water",
			value: "-20"
		},
	],




}

export default card
