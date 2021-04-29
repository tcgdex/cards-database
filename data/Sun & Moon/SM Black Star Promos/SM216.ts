import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Porygon-Z-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		474,
	],
	hp: 240,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon2",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Troubleshooting",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Special Energy from this Pokémon. If you do, heal 80 damage from it.",
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
				en: "Abnormal Overheating",
			},
			effect: {
				en: "This Pokémon is now Burned.",
			},
			damage: 160,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Critical Error GX",
			},
			effect: {
				en: "Search your deck for up to 10 cards and discard them. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
			},

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
