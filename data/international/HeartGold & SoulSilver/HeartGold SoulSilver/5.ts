import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Hitmontop",
		'fr-fr': "Kapoera",
		'de-de': "Kapoera"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [237],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Triple Kick",
				'fr-fr': "Triple pied",
				'de-de': "Dreifachkick"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Close Combat",
				'fr-fr': "Combat rapproché",
				'de-de': "Nahkampf"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Hitmontop by attacks is increased by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à Kapoera par des attaques pendant le prochain tour de votre adversaire sont augmentés de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der Kapoera durch Angriffe zugefügt wird, um 20 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 60,

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
		'en-us': "It launches kicks while spinning. If it spins at high speed, it may bore its way into the ground."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86115,
				cardmarket: 278977
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86115,
				cardmarket: 278977
			}
		},
	],

}

export default card
