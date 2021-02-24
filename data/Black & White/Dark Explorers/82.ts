import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Blissey",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		242,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Chansey",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Softboiled",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, heal 30 damage from your Active Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
			},
			effect: {
				en: "This Pokémon does 60 damage to itself.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
