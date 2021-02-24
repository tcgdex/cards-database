import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Wailord",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		321,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wailmer",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Lift",
			},
			effect: {
				en: "As long as Wailord has any React Energy cards attached to it, the Retreat Cost for each of your Water Pokémon (excluding Pokémon-ex) is 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hypno Splash",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rely on Friends",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each of your Benched Stage 1 Evolved Pokémon.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
