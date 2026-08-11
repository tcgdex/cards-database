import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Delibird",
		'fr-fr': "Cadoizo",
		'de-de': "Botogel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		225,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Present",
				'fr-fr': "Cadeau",
				'de-de': "Geschenk"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 1 carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach 1 Karte und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Ice Ball",
				'fr-fr': "Ball'glace",
				'de-de': "Frostbeule"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It carries food rolled up in its tail. It has the habit of sharing food with people lost in mountains.",
	},

	thirdParty: {
		cardmarket: 277938,
		tcgplayer: 84748
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
