import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Miltank",
		'fr-fr': "Écrémeuh",
		'de-de': "Miltank"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [241],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Continuous Tumble",
				'fr-fr': "Roulage continue",
				'de-de': "Dauerrollen"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à obtenir pile. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf eine Münze, bis du das erste Mal \"Zahl\" wirfst. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87462,
				cardmarket: 275168
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87462,
				cardmarket: 275168
			}
		},
	]
}

export default card
