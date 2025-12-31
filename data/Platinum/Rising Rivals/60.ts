import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Flareon 4",
		fr: "Pyroli  Niv. 55",
		de: "Flamara 4"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 70,
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
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Tail Slap",
				fr: "Coup de queue enflammé",
				de: "Feuerschweifschlag"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Flareon .",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Pyroli .",
				de: "Wirf 1 Münze. Bei \"Zahl\" entferne 1 -Energie, die an Flamara 4 angelegt ist, und lege sie auf deinen Ablagestapel."
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

	retreat: 1,

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "cracked-ice"
		}
	]



}

export default card
