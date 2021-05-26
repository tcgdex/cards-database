import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Élekable",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		466,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Short",
				fr: "Court Acier",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Metal Pokémon, it is now Paralyzed.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Metal, il est maintenant Paralysé.",
			},
			damage: 60,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Volt Knuckle",
				fr: "Poing Volt",
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
