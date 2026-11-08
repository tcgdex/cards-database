import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'de-de': "Jungglut"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		256,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Bulk Up",
				'fr-fr': "Gonflette",
				'de-de': "Protzer"
			},
			effect: {
				'en-us': "During your next turn, each of Combusken's attacks does 30 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Lors de votre prochain tour, chacune des attaques de Galifeu inflige 30 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
				'de-de': "In deinem nächsten Zug fügen Junggluts Angriffe dem Verteidigenden Pokémon 30 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Kick",
				'fr-fr': "Double pied",
				'de-de': "Doppelkick"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its kicking mastery lets it loose 10 kicks per second. It emits sharp cries to intimidate foes.",
	},

	thirdParty: {
		cardmarket: 277937,
		tcgplayer: 84411
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
