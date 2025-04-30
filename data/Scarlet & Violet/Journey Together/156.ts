import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Redeemable Ticket",
		fr: "Billet à Échanger",
		es: "Entrada Canjeable",
		de: "Einlösbares Ticket",
		it: "Biglietto Riscattabile",
		pt: "Ingresso Resgatável",
		'es-mx': "Boleto Canjeable"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Count your Prize cards, shuffle them, and put them on the bottom of your deck. Then, take that many cards from the top of your deck and put them face down as your Prize cards.",
		fr: "Comptez vos cartes Récompense, mélangez-les, puis placez-les en dessous de votre deck. Ensuite, prenez le même nombre de cartes du dessus de votre deck et placez-les face cachée comme cartes Récompense.",
		es: "Cuenta tus cartas de Premio, barájalas y ponlas en la parte inferior de tu baraja. Después, coge la misma cantidad de cartas de la parte superior de tu baraja y ponlas boca abajo como tus cartas de Premio.",
		de: "Zähle deine Preiskarten, mische sie und lege sie unter dein Deck. Nimm anschließend genauso viele Karten von deinem Deck und lege sie als deine verdeckten Preiskarten ab.",
		it: "Conta le tue carte Premio, rimischiale e mettile in fondo al tuo mazzo. Poi prendi lo stesso numero di carte dalla cima del tuo mazzo e mettile a faccia in giù come carte Premio.",
		pt: "Conte as suas cartas de Prêmio, embaralhe-as e coloque-as como as cartas de baixo do seu baralho. Em seguida, pegue aquele mesmo número de cartas de cima do seu baralho e coloque-as viradas para baixo como as suas cartas de Prêmio.",
		'es-mx': "Cuenta tus cartas de Premio, barájalas y ponlas en la parte inferior de tu mazo. Después, toma la misma cantidad de cartas de la parte superior de tu mazo y ponlas boca abajo como tus cartas de Premio."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
