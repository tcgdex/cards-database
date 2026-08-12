import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou",
		de: "Raikou"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [243],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Roar",
				fr: "Hurlement",
				de: "Gebrüll"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				fr: "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange contre le Pokémon Défenseur.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre",
				de: "Donner"
			},
			effect: {
				en: "Flip a coin. If tails, Raikou does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Raikou s'inflige 20 dégâts.",
				de: "Wirf eine Münze. Bei „Zahl“ fügt Raikou sich selbst 20 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88533,
				cardmarket: 277434
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88533,
				cardmarket: 277434
			},
		},
	],

}

export default card
