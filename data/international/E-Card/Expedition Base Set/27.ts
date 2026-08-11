import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'de-de': "Panzaeron"
	},

	illustrator: "Kimiya Masago",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [227],

	hp: 60,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Steel Beak",
				'fr-fr': "Bec d'acier",
				'de-de': "Stahlschnabel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Air Cutter",
				'fr-fr': "Taille-air",
				'de-de': "Luftschneider"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89234,
				cardmarket: 274902
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89234,
				cardmarket: 274902
			},
		},
	],
}

export default card
