import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Latios-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 170,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Bind",
			},
			effect: {
				en: "If you have 4 or fewer Pokémon in play, this Pokémon can't attack.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tag Purge",
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from TAG TEAM Pokémon.",
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Clear Vision GX",
			},
			effect: {
				en: "For the rest of this game, your opponent can't use any GX attacks. (You can't use more than 1 GX attack in a game.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
