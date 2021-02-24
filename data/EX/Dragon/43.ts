import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Shuppet",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		353,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hypnosis",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Night Attack",
			},
			effect: {
				en: "Put 1 damage counter on 1 of your opponent's Pokémon.",
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
