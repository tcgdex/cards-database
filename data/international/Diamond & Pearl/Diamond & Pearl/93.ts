import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf",
		'de-de': "Plinfa"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'de-de': "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Splash",
				'fr-fr': "Éclaboussure",
				'de-de': "Wasserplatscher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.",
		'fr-fr': "Il est fier et déteste accepter la nourriture qu'on lui offre. Son pelage épais le protège du froid."
	},

	thirdParty: {
		cardmarket: 277592,
		tcgplayer: 88142
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			size: "jumbo",
			stamp: ["25th-celebration"]
		},
		{
			type: "reverse",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["pokemon-day"]
		},
		{
			type: "normal",
			stamp: ["distributor-meeting"]
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"]
		}
	]
}

export default card
