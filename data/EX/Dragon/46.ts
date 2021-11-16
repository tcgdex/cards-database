import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Vibrava",
		fr: "Vibraninf"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		329,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Trapinch",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Levitate",
				fr: "Lévitation"
			},
			effect: {
				en: "If Vibrava has any basic Energy cards attached to it, Vibrava's Retreat Cost is 0.",
				fr: "Si Vibraninf possède des cartes Énergie de base, son Coût de retraite est de 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Wing",
				fr: "Aile tranchante"
			},

			damage: 20,

		},
	],






}

export default card
