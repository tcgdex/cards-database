import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Whimsicott-GX",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		547,
	],
	hp: 190,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Cottonee",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fluffy Cotton",
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Energy Blow",
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Energy attached to this Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Toy Box-GX",
			},
			effect: {
				en: "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],




}

export default card
