import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		18,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pidgeotto",
		fr: "Roucoups",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spin Storm",
				fr: "Orage Virevoltant",
			},
			effect: {
				en: "Your opponent puts their Active Pokémon and all cards attached to it into their hand.",
				fr: "Votre adversaire place son Pokémon Actif et toutes les cartes qui lui sont attachées dans sa main.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
