import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Banette",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shadow Steal",
			},
			effect: {
				en: "Does 10 damage plus 20 more damage for each Special Energy card in your opponent's discard pile.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Darkness Chant",
			},
			effect: {
				en: "Count the number of Basic Pokémon or Evolution cards in your discard pile. Put that many damage counters on the Defending Pokémon. You can't put more than 6 damage counters on the Defending Pokémon in this way.",
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
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
