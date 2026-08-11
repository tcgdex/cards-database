import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Heracross E4",
		'fr-fr': "Scarhino  Niv. 51",
		'de-de': "Skaraborn 4"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [214],
	hp: 90,
	types: [
		"Grass"
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				'en-us': "Focus Energy",
				'fr-fr': "Puissance",
				'de-de': "Energiefokus"
			},
			effect: {
				'en-us': "During your next turn, Heracross E4's Megahorn attack's base damage is 100.",
				'fr-fr': "Lors de votre prochain tour, les dégâts de base de l'attaque Megacorne de Scarhino  sont de 100.",
				'de-de': "In deinem nächsten Zug beträgt der Grundschaden des Angriffs Vielender von Skaraborn 4 100 Schadenspunkte."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Megahorn",
				'fr-fr': "Megacorne",
				'de-de': "Vielender"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278598,
				tcgplayer: 86068
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278598,
				tcgplayer: 86068
			}
		},
	],

}

export default card
