import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Steelix",
		'fr-fr': "Steelix",
		'de-de': "Stahlos"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [208],

	hp: 120,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Onix",
		'fr-fr': "Onix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Guard Press",
				'fr-fr': "Pression de garde",
				'de-de': "Schutzdruck"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Steelix by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à Steelix par des attaques pendant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der Stahlos durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Steel Swing",
				'fr-fr': "Frappe d’acier",
				'de-de': "Stahlschwung"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 80 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 80 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "80×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Its body has been compressed deep under the ground. As a result, it is even harder than a diamond."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89563,
				cardmarket: 279180
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89563,
				cardmarket: 279180
			}
		},
		{
			type: "reverse",
			foil: 'league',
			thirdParty: {
				tcgplayer: 164283,
				cardmarket: 371565
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 125050
			}
		},
	],

}

export default card
