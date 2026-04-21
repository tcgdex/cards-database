import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Lairon",
		fr: "Galegon",
		de: "Stollrak"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Aron",
		fr: "Galekid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Head",
				fr: "Tête d'acier",
				de: "Eiserner Schädel"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf so lange eine Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277015,
		tcgplayer: 86577
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
