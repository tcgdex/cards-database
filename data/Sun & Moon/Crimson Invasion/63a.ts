import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Guzzlord-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		799,
	],
	hp: 210,
	types: [
		"Darkness",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Eat Sloppily",
			},
			effect: {
				en: "Discard the top 5 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon.",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tyrannical Hole",
			},

			damage: 180,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Glutton-GX",
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 100,

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
