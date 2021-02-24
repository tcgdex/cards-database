import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "White Kyurem",
		fr: "Kyurem Blanc",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 130,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Field Crush",
				fr: "Broyeur de Terrain",
			},
			effect: {
				en: "If your opponent has a Stadium card in play, discard it.",
				fr: "Si votre adversaire a une carte Stade en jeu, défaussez-la.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Freezing Flames",
				fr: "Flammes Glaçantes",
			},
			effect: {
				en: "If this Pokémon has any Fire Energy attached to it, this attack does 80 more damage.",
				fr: "Si de l’Énergie Fire est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
