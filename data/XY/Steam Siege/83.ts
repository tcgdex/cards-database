import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		621,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Proud Fang",
				fr: "Croc Orgueilleux",
			},
			effect: {
				en: "If your opponent has any Pokémon BREAK in play, this attack does 60 more damage.",
				fr: "Si votre adversaire a un Pokémon TURBO en jeu, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Giga Claw",
				fr: "Giga Griffe",
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
