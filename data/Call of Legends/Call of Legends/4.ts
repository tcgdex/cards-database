import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Espeon",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Solar Suggestion",
			},
			effect: {
				en: "Move up to 4 damage counters from any of your Pokémon to any of your opponent's Pokémon in any way you like.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psybeam",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},
			damage: 30,

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
