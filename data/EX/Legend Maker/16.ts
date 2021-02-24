import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Girafarig",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		203,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rear Sensor",
			},
			effect: {
				en: "Each player's Active Basic Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Foresight",
			},
			effect: {
				en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order you like.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Disorder",
			},
			effect: {
				en: "If the Defending Pokémon has any Special Energy cards attached to it, the Defending Pokémon is now Confused.",
			},
			damage: 20,

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
