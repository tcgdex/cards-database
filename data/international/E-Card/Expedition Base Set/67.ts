import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Venusaur",
		'fr-fr': "Florizarre",
		'de-de': "Bisaflor"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [3],

	hp: 100,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leech Seed",
				'fr-fr': "Vampigraine",
				'de-de': "Egelsamen"
			},
			effect: {
				'en-us': "If this attack damages the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Venusaur, if it has any.",
				'fr-fr': "Si cette attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), retirez 1 marqueur de dégâts de Florizarre, s'il en possède.",
				'de-de': "Falls dieser Angriff dem Verteidigenden Pokémon Schadenspunkte zufügt (nachdem Schwäche und Resistenz verrechnet wurden), entferne eine Schadensmarke von Bisaflor, falls es mindestens eine hat."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Strikes",
				'fr-fr': "Attaques furieuses",
				'de-de': "Zornschläge"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "30×",

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
				tcgplayer: 90315,
				cardmarket: 274905
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90315,
				cardmarket: 274905
			},
		},
	],
}

export default card
