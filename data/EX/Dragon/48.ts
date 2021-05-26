import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Whiscash",
	},
	illustrator: "Tomokazu",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		340,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Barboach",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Submerge",
			},
			effect: {
				en: "As long as Whiscash is on your Bench, prevent all damage done to Whiscash by opponent's attacks.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnitude",
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
