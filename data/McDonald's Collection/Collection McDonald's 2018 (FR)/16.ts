import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Rondoudou",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [39],
	hp: 60,
	types: ["Fairy"],

	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Banc",
			},
			effect: {
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger ce Pokémon avec un Froussardine-GX dans votre main. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Tir de Précision",
			},
			effect: {
				fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
		},
	],
}

export default card
