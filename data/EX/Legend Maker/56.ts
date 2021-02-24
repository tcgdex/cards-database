import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Lileep",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		345,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Root Fossil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tender Tentacles",
			},
			effect: {
				en: "If Lileep has any React Energy cards attached to it, remove 2 damage counters from Lileep.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
