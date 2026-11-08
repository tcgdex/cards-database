import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [95],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Crush",
				'fr-fr': "Écrase",
				'de-de': "Zermalmer"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the amount of Energy attached to Onix. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez un nombre de pièces équivalent au nombre d'Énergie attachées à Onix. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf so viele Münzen, wie Energie an Onix angelegt ist. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87878,
				cardmarket: 275173
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87878,
				cardmarket: 275173
			}
		},
	]
}

export default card
