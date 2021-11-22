import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Dialga EX",
		fr: "Dialga EX"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 180,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chrono Wind",
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon-EX, it can't attack during your opponent's next turn.",
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Full Metal Impact",
			},
			effect: {
				en: "Discard 2 Metal Energy attached to this Pokémon.",
			},
			damage: 150,

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
			type: "Psychic",
			value: "-20"
		},
	],

	suffix: "EX",
	retreat: 2
}

export default card
