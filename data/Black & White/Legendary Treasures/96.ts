import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Garchomp",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Gabite",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mach Cut",
			},
			effect: {
				en: "Discard a Special Energy attached to the Defending Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Fighting",
			],
			name: {
				en: "Dragonblade",
			},
			effect: {
				en: "Discard the top 2 cards of your deck.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1
}

export default card
