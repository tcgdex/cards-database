import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'de-de': "Frizelbliz"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		309,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sniff Out",
				'fr-fr': "Flairer",
				'de-de': "Rumschnüffeln"
			},
			effect: {
				'en-us': "Put any 1 card from your discard pile into your hand.",
				'fr-fr': "Placez n'importe quelle carte de votre pile de défausse dans votre main.",
				'de-de': "Wähle 1 Karte von deinem Ablagestapel und nimm sie auf deine Hand."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Quick Blow",
				'fr-fr': "Coup d'poing éclair",
				'de-de': "Schnellschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277133,
		tcgplayer: 85138
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
