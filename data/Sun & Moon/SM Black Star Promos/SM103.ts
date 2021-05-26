import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Lunala-GX",
		fr: "Lunala-GX",
	},
	illustrator: "PLANETA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		792,
	],
	hp: 230,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	stage: "Stage2",
	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Glide",
				fr: "Glissement",
			},

			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lunar Javelin",
				fr: "Javelot Lunaire",
			},
			effect: {
				en: "Discard 2 Psychic Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies Psychic de ce Pokémon.",
			},
			damage: 200,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Requiem GX",
				fr: "Requiem-GX",
			},
			effect: {
				en: "(You can't use more than 1 GX attack in a game.)",
				fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 250,

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
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
