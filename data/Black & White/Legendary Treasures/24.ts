import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Victini-EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 110,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Turbo Energize",
			},
			effect: {
				en: "Search your deck for 2 basic Energy cards and attach them to your Benched Pokémon in any way you like. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Intensifying Burn",
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon-EX, this attack does 50 more damage.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1
}

export default card
