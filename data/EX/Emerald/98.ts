import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Regice ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		378,
	],
	hp: 100,
	types: [
		"Water",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ice Beam",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Iceberg Crush",
			},
			effect: {
				en: "If Regirock ex is in play, flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
