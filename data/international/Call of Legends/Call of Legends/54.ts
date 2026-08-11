import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'de-de': "Piepi"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [35],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Minimize",
				'fr-fr': "Lilliput",
				'de-de': "Komprimator"
			},
			effect: {
				'en-us': "During your opponent's next turn ,any damage done to Clefairy by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés par des attaques durant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der Piepi durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slap",
				'fr-fr': "Gifle",
				'de-de': "Hieb"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84359,
				cardmarket: 279697
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84359,
				cardmarket: 279697
			},
		},
	],

}

export default card
