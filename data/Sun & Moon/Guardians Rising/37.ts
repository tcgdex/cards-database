import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		746,
	],
	hp: 30,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Schooling",
				fr: "Banc",
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch this Pokémon with a Wishiwashi-GX in your hand. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque),vous pouvez échanger ce Pokémon avec un Froussardine-GX dans votre main. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sharpshooting",
				fr: "Tir de Précision",
			},
			effect: {
				en: "This attack does 10 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
