import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Tapu Fini",
		fr: "Tokopisco",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Razor Fin",
				fr: "Aileron-Rasoir",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Nature Wave",
				fr: "Onde Naturelle",
			},
			effect: {
				en: "If your opponent has any Ultra Beasts in play, this attack can be used for Colorless.",
				fr: "Si votre adversaire a une Ultra-Chimère en jeu, cette attaque peut être utilisée pour Colorless.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
