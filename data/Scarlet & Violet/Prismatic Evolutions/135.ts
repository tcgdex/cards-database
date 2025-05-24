import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Brassius",
		fr: "Colza",
		es: "Brais",
		pt: "Brás",
		it: "Brassius",
		de: "Colzo"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Count the cards in your hand, shuffle those cards into your deck, then draw that many cards plus 1.",
		fr: "Comptez les cartes dans votre main, mélangez-les avec votre deck, puis piochez autant de cartes plus une.",
		es: "Cuenta las cartas de tu mano, pon esas cartas en tu baraja y barájalas todas. Después, roba esa misma cantidad de cartas más 1.",
		pt: "Conte as cartas na sua mão, embaralhe aquelas cartas no seu baralho e, em seguida, compre aquele mesmo número de cartas mais 1.",
		it: "Conta le carte che hai in mano, rimischiale nel tuo mazzo e poi pesca lo stesso numero di carte più una.",
		de: "Zähle die Karten auf deiner Hand, mische jene Karten in dein Deck und ziehe anschließend genauso viele Karten plus 1."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "GIDORA"
}

export default card