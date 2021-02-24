import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Scyther",
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		123,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
			},
			damage: 60,

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
