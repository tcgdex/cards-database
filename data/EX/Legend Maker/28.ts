import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Wobbuffet",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stages of Evolution",
			},
			effect: {
				en: "As long as Wobbuffet is an Evolved Pokémon, your opponent pays Colorless more to retreat his or her Active Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Wobbuffet.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Shadow Tag",
			},
			effect: {
				en: "Put 7 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
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
