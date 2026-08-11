import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Vibrava δ",
		'fr-fr': "Vibraninf δ",
		'de-de': "Vibrava"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		329,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Psychic Wing",
				'fr-fr': "Aile psy",
				'de-de': "Psychoflügel"
			},
			effect: {
				'en-us': "If Vibrava has any Psychic Energy attached to it, the Retreat Cost for Vibrava is 0.",
				'fr-fr': "Si Vibraninf possède de l'Énergie , son Coût de retraite est de 0.",
				'de-de': "Wenn mindestens 1 -Energie an Vibrava angelegt ist, hat Vibrava Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Blow",
				'fr-fr': "Coup d'poing éclair",
				'de-de': "Schnellschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277229
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
