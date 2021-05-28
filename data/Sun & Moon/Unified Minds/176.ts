import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		521,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Downburst",
				fr: "Rafale Descendante",
			},
			effect: {
				en: "You may have each player shuffle all cards attached to their Active Pokémon into their deck.",
				fr: "Vous pouvez demander à chaque joueur de mélanger toutes les cartes attachées à son Pokémon Actif avec son deck.",
			},
			damage: 90,

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
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
