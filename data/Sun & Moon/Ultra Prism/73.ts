import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		215,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sneaky Smash",
				fr: "Fracas Sournois",
			},
			effect: {
				en: "You can use this attack only if you go second, and only on your first turn. Discard an Energy from 1 of your opponent's Pokémon.",
				fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Défaussez une Énergie de l’un des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
