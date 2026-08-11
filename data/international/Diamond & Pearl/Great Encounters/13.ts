import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'de-de': "Bibor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Band Attack",
				'fr-fr': "Attaque de groupe",
				'de-de': "Gemeinschaftsangriff"
			},
			effect: {
				'en-us': "Does 30 damage times the number of Beedrill you have in play.",
				'fr-fr': "Inflige 30 dégâts multipliés par le nombre de Dardargnan que vous avez en jeu.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte für jedes Bibor, das du im Spiel hast, zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Twineedle",
				'fr-fr': "Double-dard",
				'de-de': "Duonadel"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	description: {
		'en-us': "Its best attack involves flying around at high speed, striking with poison needles, then flying off.",
	},

	thirdParty: {
		cardmarket: 277915,
		tcgplayer: 83770
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["stephen-silvestro"]
		}
	]
}

export default card
