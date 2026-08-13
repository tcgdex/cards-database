import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei",
		de: "Entei"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [244],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stomp",
				fr: "Écrasement",
				de: "Stampfer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danseflamme",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 2 Basic Energy cards attached to Entei or this attack does nothing.",
				fr: "Défaussez 2 cartes Énergie de base attachées à Entei ou cette attaque est sans effet.",
				de: "Entferne 2 Basis-Energiekarten von Entei und lege sie auf den Ablagestapel, sonst hat dieser Angriff keine Auswirkungen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85271,
				cardmarket: 277432
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85271,
				cardmarket: 277432
			},
		},
	],

}

export default card
