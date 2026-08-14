import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
		de: "Flamara"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [136],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
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
				en: "Discard 2 basic Energy cards attached to Flareon or this attack does nothing.",
				fr: "Défaussez 2 cartes Énergie de base attachées à Pyroli ou cette attaque est sans effet.",
				de: "Entferne 2 Basis-Energiekarten von Flamara und lege sie auf den Ablagestapel, sonst hat dieser Angriff keine Auswirkungen."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85495,
				cardmarket: 277450
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85495,
				cardmarket: 277450
			},
		},
	],

}

export default card
