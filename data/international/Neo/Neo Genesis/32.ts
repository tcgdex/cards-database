import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
		'de-de': "Tyracroc"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		159,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus"
	},

	stage: "Stage1",

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
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Sweep Away",
				'fr-fr': "Nettoyage",
				'de-de': "Wegfegen"
			},
			effect: {
				'en-us': "Discard the top 3 cards from your deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck",
				'de-de': "Lege die obersten drei Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It opens its huge jaws wide when attacking. If it loses any fangs while biting, they grow back in.",
		'fr-fr': "Il ouvre son immense mâchoire en grand lorsqu'il attaque. S'il perd un croc en mordant, celui-ci repoussera."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274431,
				tcgplayer: 84496
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274431,
				tcgplayer: 84496
			}
		}
	]
}

export default card
