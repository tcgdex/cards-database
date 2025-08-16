import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Manaphy",
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		490,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Marine Guidance",
			},
			effect: {
				en: "Search your deck for a Water Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Aqua Ring",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 291576
	}
}

export default card
