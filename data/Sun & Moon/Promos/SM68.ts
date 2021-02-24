import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Xurkitree-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		796,
	],
	hp: 180,
	types: [
		"Lightning",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flashing Head",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have any Special Energy attached to them.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Rumbling Wires",
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
			},
			damage: 100,

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Lighting-GX",
			},
			effect: {
				en: "Your opponent reveals their hand. Add a card you find there to their Prize cards face down. (You can't use more than 1 GX attack in a game.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
