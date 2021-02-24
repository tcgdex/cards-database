import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Vaporeon",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		134,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wash Away",
			},
			effect: {
				en: "If you have any Benched Pokémon, flip a coin. If heads, remove all damage counters from 1 of your Benched Pokémon and discard all Energy cards attached to it.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hypno Shower",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Remove 1 damage counter from each Benched Pokémon (yours and your opponent's) with any damage counters on it.",
			},
			damage: 30,

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
