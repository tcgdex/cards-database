import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe",
		'de-de': "Schillok"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [8],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Doubleslap",
				'fr-fr': "Torgnoles",
				'de-de': "Duplexhieb"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Giant Wave",
				'fr-fr': "Vague géante",
				'de-de': "Riesenwelle"
			},
			effect: {
				'en-us': "Wartortle can't attack during your next turn.",
				'fr-fr': "Carabaffe ne peut pas attaquer pendant votre prochain tour.",
				'de-de': "Schillok kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90485,
				cardmarket: 274967
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90485,
				cardmarket: 274967
			},
		},
	],
}

export default card
