import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		fr: "Milobellus",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		fr: "Barpau",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				fr: "Aqua-mirage",
			},
			effect: {
				fr: "Si vous n'avez plus de cartes en main, prévenez tous les dégâts infligés à Milobellus par des attaques de Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				fr: "Vague diminutrice",
			},
			effect: {
				fr: "Inflige 80 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Milobellus.",
			},
			damage: "80-",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
