import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Trevenant & Dusknoir-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		477,
	],
	hp: 270,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Night Watch",
			},
			effect: {
				en: "Choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.",
			},
			damage: 150,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Pale Moon GX",
			},
			effect: {
				en: "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out. If this Pokémon has at least 1 extra {P} Energy attached to it (in addition to this attack's cost), discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
