import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
		'es-es': "Croconaw",
		'it-it': "Croconaw",
		'pt-br': "Croconaw",
		'de-de': "Tyracroc"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		159,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
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
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 30,

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
				'es-es': "Barrido",
				'it-it': "Spazzare Via",
				'pt-br': "Eliminação",
				'de-de': "Wegfegen"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck.",
				'es-es': "Descarta las 3 primeras cartas de tu baraja.",
				'it-it': "Scarta le prime tre carte del tuo mazzo.",
				'pt-br': "Descarte as 3 primeiras cartas do seu baralho.",
				'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 90,

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
		'en-us': "Once it bites down, it won't let go until it loses its fangs. New fangs quickly grow into place.",
	},

	thirdParty: {
		cardmarket: 363495,
		tcgplayer: 175385
	}
}

export default card
