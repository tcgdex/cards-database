import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
		de: "Qurtel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase",
				de: "Zermahlen"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Torkoal.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Chartor.",
				de: "Dieser Angriff fügt für jede an Qurtel angelegte Energie 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Glühen"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277003,
		tcgplayer: 89969
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
