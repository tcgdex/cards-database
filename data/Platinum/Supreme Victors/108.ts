import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		58,
	],
	hp: 60,
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
				en: "Smash Kick",
				fr: "Coud'pattes",
				de: "Schmetterkick"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fireworks",
				fr: "Feux d'artifices",
				de: "Feuerwerk"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Growlithe.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Caninos.",
				de: "Wirf 1 Münze. Bei \"Zahl\" entferne 1 -Energie, die an Fukano angelegt ist, und lege sie auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
