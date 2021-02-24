import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Hydreigon",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		635,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Zweilous",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Trance",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Darkness Energy attached to 1 of your Pokémon to another of your Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dragonblast",
			},
			effect: {
				en: "Discard 2 Darkness Energy attached to this Pokémon.",
			},
			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],





}

export default card
