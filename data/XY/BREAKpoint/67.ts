import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		185,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Watch and Learn",
				fr: "Apprentissage",
			},
			effect: {
				en: "If your opponent's Pokémon used an attack during his or her last turn, use it as this attack.",
				fr: "Si l'un des Pokémon de votre adversaire a utilisé une attaque pendant son dernier tour, utilisez-la en tant que cette attaque.",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
