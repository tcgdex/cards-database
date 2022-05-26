import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Cyllene"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Flip 2 coins. Put a number of cards up to the number of heads from your discard pile on top of your deck in any order.",
		fr: "Lancez 2 pièces. De votre pile de défausse, mettez un nombre de cartes inférieur ou égal au nombre de côtés face obtenus sur le dessus de votre deck dans l'ordre de votre choix.",
		es: "Lanza 2 monedas. Coge de tu pila de descartes una cantidad de cartas igual o inferior al número de caras que te hayan salido y ponlas en la parte superior de tu baraja en el orden que quieras.",
		it: "Lancia due volte una moneta. Prendi dalla tua pila degli scarti un numero di carte uguale o inferiore al numero di volte in cui è uscito testa e mettile in cima al tuo mazzo nell'ordine che preferisci.",
		pt: "Jogue 2 moedas. Coloque um número de cartas da sua pilha de descarte como as cartas de cima do seu baralho em qualquer ordem até o número de caras.",
		de: "Wirf 2 Münzen. Lege bis zu so viele Karten, wie du Kopf geworfen hast, aus deinem Ablagestapel in beliebiger Reihenfolge auf dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card