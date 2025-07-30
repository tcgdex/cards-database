import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Sunkern",
		fr: "Tournegrin",
		de: "Sonnkern"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		191,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cure Kernels",
				fr: "Graines de soin",
				de: "Heilsamen"
			},
			effect: {
				en: "Remove 2 damage counters from 1 of your Pokémon.",
				fr: "Retirez 2 marqueurs de dégâts d’un de vos Pokémon.",
				de: "Entferne 2 Schadensmarken von 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon graine",
				de: "Samenbomben"
			},

			damage: 20,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It may plummet from the sky. If attacked by a Spearow, it will violently shake its leaves."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279057
	}
}

export default card
