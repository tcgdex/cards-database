import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Mewtwo ex",
		fr: "Mewtwo ex",
		de: "Mewtu ex"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Absorption",
				fr: "Absorption d'énergie",
				de: "Energieaufnahme"
			},
			effect: {
				en: "Attach up to 2 Energy cards from your discard pile to Mewtwo ex.",
				fr: "Vous pouvez attacher à Mewtwo Ex jusqu'à deux cartes Énergie de votre pile de défausse.",
				de: "Wähle bis zu 2 Energiekarten aus deinem Ablagestapel und lege sie an Mewtu ex an."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyburn",
				fr: "Brûlure psy",
				de: "Psychoverbrennung"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 275749,
		tcgplayer: 87428
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
