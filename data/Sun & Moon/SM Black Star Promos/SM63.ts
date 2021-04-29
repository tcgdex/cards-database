import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Salazzle-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		758,
	],
	hp: 200,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Salandit",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Diabolical Claws",
			},
			effect: {
				en: "This attack does 50 damage for each Prize card you have taken.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Heat Blast",
			},

			damage: 110,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Queen's Haze-GX",
			},
			effect: {
				en: "Discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			},

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
