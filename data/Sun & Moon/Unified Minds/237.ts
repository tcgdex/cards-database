import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Rowlet & Alolan Exeggutor-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 270,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Super Growth",
			},
			effect: {
				en: "Search your deck for a card that evolves from 1 of your {G} Pokémon and put it onto that Pokémon to evolve it. If that Pokémon is now a Stage 1 Pokémon, search your deck for a Stage 2 Pokémon that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Calming Hurricane",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
			},
			damage: 150,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Tropical Hour GX",
			},
			effect: {
				en: "If this Pokémon has at least 3 extra Energy attached to it (in addition to this attack's cost), your opponent shuffles all Energy from all of their Pokémon into their deck. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 200,

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
