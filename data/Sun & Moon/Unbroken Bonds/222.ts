import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Greninja & Zoroark-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		571,
	],
	hp: 250,
	types: [
		"Darkness",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Pulse",
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Darkness Energy attached to all of your Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Union-GX",
			},
			effect: {
				en: "Put 2 in any combination of Darkness Pokémon-GX and Darkness Pokémon-EX from your discard pile onto your Bench. If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), attach 2 Energy cards from your discard pile to each Pokémon that you put onto your Bench in this way. (You can't use more than 1 GX attack in a game.)",
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
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
