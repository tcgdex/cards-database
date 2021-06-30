import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Croconaw",
		fr: "Crocrodil",
		es: "Croconaw",
		it: "Croconaw",
		pt: "Croconaw",
		de: "Tyracroc"
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
		en: "Totodile",
		fr: "Kaiminus",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
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
				en: "Sweep Away",
				fr: "Nettoyage",
				es: "Barrido",
				it: "Spazzare Via",
				pt: "Eliminação",
				de: "Wegfegen"
			},
			effect: {
				en: "Discard the top 3 cards of your deck.",
				fr: "Défaussez les 3 cartes du dessus de votre deck.",
				es: "Descarta las 3 primeras cartas de tu baraja.",
				it: "Scarta le prime tre carte del tuo mazzo.",
				pt: "Descarte as 3 primeiras cartas do seu baralho.",
				de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
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



}

export default card
