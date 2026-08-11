import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Mr. Mime E4",
		'fr-fr': "M. Mime  Niv. 53",
		'de-de': "Pantimos 4"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [122],
	hp: 70,
	types: [
		"Psychic"
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				'en-us': "Magic Heal",
				'fr-fr': "Guérison magique",
				'de-de': "Magische Heilung"
			},
			effect: {
				'en-us': "Flip 3 coins. Remove a number of damage counters equal to the number of heads from your Pokémon in any way you like.",
				'fr-fr': "Lancez 3 pièces. Retirez à vos Pokémon autant de marqueurs de dégât que vous otenez de faces de la façon que vous voulez.",
				'de-de': "Wirf 3 Münzen. Entferne für jedes Mal, wenn die Münze \"Kopf\" gezeigt hat, 1 Schadensmarke von 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Barrier Attack",
				'fr-fr': "Attaque d'obstacle",
				'de-de': "Angriffsbarriere"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Mr. Mime E4 by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés à M. Mime  par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der Pantimos 4 durch Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278602,
				tcgplayer: 87597
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278602,
				tcgplayer: 87597
			}
		},
	],

}

export default card
