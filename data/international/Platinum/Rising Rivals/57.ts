import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Aron",
		'fr-fr': "Galekid Niv. 21",
		'de-de': "Stollunior"
	},

	illustrator: "Takao Unno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [304],

	hp: 50,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Iron Head",
				'fr-fr': "Tête d'acier",
				'de-de': "Eisenschädel"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ramme"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It usually lives deep in mountains. However, hunger may drive it to eat railroad tracks and cars."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278631,
				tcgplayer: 83637
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278631,
				tcgplayer: 83637
			}
		},
	],

}

export default card
