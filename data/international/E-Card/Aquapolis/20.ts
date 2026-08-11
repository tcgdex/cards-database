import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [171],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Lightning Ball",
				'fr-fr': "Boule éclair",
				'de-de': "Kugelblitz"
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
				'en-us': "Conduction",
				'fr-fr': "Conduction",
				'de-de': "Stromübertragung"
			},
			effect: {
				'en-us': "Discard all Lightning Energy cards attached to Lanturn. Flip a number of coins equal to the number of Lightning Energy cards you discarded. This attack does 30 damage plus 40 more damage for each heads.",
				'fr-fr': "Défaussez-vous de toutes les cartes Énergie  attachées à Lanturn. Lancez un nombre de pièces égal au nombre de cartes Énergie  que vous avez défaussé. Cette attaque inflige 30 dégâts plus 40 dégâts supplémentaires pour chaque face.",
				'de-de': "Lege alle an Lanturn angelegten -Energiekarten auf deinen Ablagestapel. Wirf eine Anzahl Münzen gleich der Anzahl so abgelegter -Energiekarten. Dieser Angriff fügt 30 Schadenspunkte plus 40 weitere Schadenspunkte pro geworfenem 'Kopf' zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86600,
				cardmarket: 275055
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86600,
				cardmarket: 275055
			}
		},
	]
}

export default card
