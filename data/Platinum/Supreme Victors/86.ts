import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Togekiss C",
		fr: "Togekiss ",
		de: "Togekiss C"
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		468,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Collect",
				fr: "Collectionner",
				de: "Sammeln"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				de: "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque imprudente",
				de: "Waghalsiger Sturmangriff"
			},
			effect: {
				en: "Togekiss C does 10 damage to itself.",
				fr: "Togekiss  s'inflige 10 dégâts.",
				de: "Togekiss C fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
