import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
		'de-de': "Seemon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [117],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse vague",
				'de-de': "Wellenplatscher"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Water Bullet",
				'fr-fr': "Cartouche d'O",
				'de-de': "Wassergeschoss"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the number of Water Energy attached to Seadra. This attack does 30 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez un nombre de pièces équivalent au nombre d'Énergies  attachées à Hypocéan. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf so viele Münzen, wie -Energie an Seemon angelegt ist. Dieser Angriff fügt 30 Schadenpunkte plus 10 weitere Schadenspunkte pro geworfenem 'Kopf' zu."
			},
			damage: "30+",

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
			type: 'normal',
			thirdParty: {
				tcgplayer: 89010,
				cardmarket: 275131
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89010,
				cardmarket: 275131
			}
		},
	]
}

export default card
