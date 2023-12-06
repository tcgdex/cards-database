import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Elektek",
		de: "Elektek"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Light Punch",
				fr: "Poing léger",
				de: "Leichter Hieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Shock Bolt",
				fr: "Choc’éclair",
				de: "Schock-Blitz"
			},
			effect: {
				en: "Flip a coin. If tails, discard all Lightning Energy attached to Electabuzz.",
				fr: "Lancez une pièce. Si c’est pile, défaussez toutes les cartes Énergie Lightning attachées à Elektek.",
				de: "Wirf eine Münze. Bei \"Zahl\" lege alle an Elektek angelegten -Energien auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "Its body constantly discharges electricity. Getting close to it will make your hair stand on end."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
