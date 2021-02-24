import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Dusclops",
	},
	illustrator: "Tomoko Wakai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		356,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Duskull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Removal",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Powerful Hand",
			},
			effect: {
				en: "Count the number of cards in your hand. Put that many damage counters on the Defending Pokémon. You can't put more than 7 damage counters in this way.",
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
			value: "-30"
		},
	],




}

export default card
