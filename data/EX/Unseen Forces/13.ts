import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		de: "Lahmus"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
				fr: "Double armure",
				de: "Dual Armor"
			},
			effect: {
				en: "As long as Slowbro has any Psychic Energy attached to it, Slowbro is both Water and Psychic type.",
				fr: "Tant que Flagadoss possède des Énergies , il est à la fois de type  et .",
				de: "As long as Slowbro has any  Energy attached to it, Slowbro is both  and  type."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Parallel Gain",
				fr: "Gain parallèle",
				de: "Parallel Gain"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon (including Slowbro).",
				fr: "Retirez 1 marqueur de dégât à chacun de vos Pokémon (Flagadoss inclus).",
				de: "Remove 1 damage counter from each of your Active Pokémon (including Slowbro)."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Roulé-boulé",
				de: "Rolling Tackle"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276659,
		tcgplayer: 89305
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card
