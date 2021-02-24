import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Tangela",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		114,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Healing",
			},
			effect: {
				en: "Whenever you attach a React Energy card from your hand to Tangela, remove all damage counters from Tangela.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Entangling Vines",
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, that Pokémon can't attack during your opponent's next turn.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gentle Wrap",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
