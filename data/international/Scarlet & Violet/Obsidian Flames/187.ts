import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Colza",
		'en-us': "Brassius",
		'es-es': "Brais",
		'it-it': "Brassius",
		'pt-br': "Brás",
		'de-de': "Colzo"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Comptez les cartes dans votre main, mélangez-les avec votre deck, puis piochez autant de cartes plus une.",
		'en-us': "Count the cards in your hand, shuffle those cards into your deck, then draw that many cards plus 1.",
		'es-es': "Cuenta las cartas de tu mano, pon esas cartas en tu baraja y barájalas todas. Después, roba esa misma cantidad de cartas más 1.",
		'it-it': "Conta le carte che hai in mano, rimischiale nel tuo mazzo e poi pesca lo stesso numero di carte più una.",
		'pt-br': "Conte as cartas na sua mão, embaralhe aquelas cartas no seu baralho e, em seguida, compre aquele mesmo número de cartas mais 1.",
		'de-de': "Zähle die Karten auf deiner Hand, mische jene Karten in dein Deck und ziehe anschließend genauso viele Karten plus 1."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725267,
				tcgplayer: 509779,
				cardtrader: 256083
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725267,
				tcgplayer: 509779,
				cardtrader: 256083
			}
		},
	],

	illustrator: "GIDORA",

	
}

export default card
