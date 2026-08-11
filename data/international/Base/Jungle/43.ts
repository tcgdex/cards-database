import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'de-de': "Rasaff"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf drei Münzen. Dieser Angriff fügt jedesmal, wenn die Münze 'Kopf' zeigt, 20 Schadenspunkte zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Tantrum",
				'fr-fr': "Mauvaise humeur",
				'de-de': "Trotzanfall"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Primeape is now Confused (after doing damage).",
				'fr-fr': "Lancez une pièce. Si c'est pile, Colossinge est maintenant Confus (après le calcul des dégâts).",
				'de-de': "Wirf eine Münze. Bei 'Zahl' ist Rasaff jetzt verwirrt (nach der Schadensverteilung)."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Always furious and tenacious to boot. It will not abandon chasing its quarry until its quarry is caught.",
		'fr-fr': "Agressif et teigneux, il poursuit son gibier jusqu'à épuisement complet."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273840,
				tcgplayer: 45146
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273840,
				tcgplayer: 45146
			}
		}
	],
}

export default card
