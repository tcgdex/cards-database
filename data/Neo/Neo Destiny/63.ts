import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
		de: "Dratini"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shed",
				fr: "Mue",
				de: "Häuten"
			},
			effect: {
				en: "Remove 1 damage counter from Dratini.",
				fr: "Retirez un marqueur de dégâts sur Minidraco.",
				de: "Entferne eine Schadensmarke von Dratini."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
				de: "Furienschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "10x",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "Large from birth, this Pokémon increases in size throughout its life by regularly shedding its skin.",
		fr: "Grand dès sa naissance, ce Pokémon augmente de taille durant sa vie en changeant régulièrement de peau.",
		de: "Schon von Geburt an ist dieses Pokémon groß, und es wächst jedes Mal weiter, wenn es sich häutet."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274715,
				tcgplayer: 84929
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274715,
				tcgplayer: 84929
			}
		}
	]
}

export default card
