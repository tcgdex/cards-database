import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Electrocharger",
		fr: "Électrochargeur",
		es: "Electrocargador",
		it: "Caricatore Elettrico",
		pt: "Eletrocarregador",
		de: "Elektro-Ladegerät"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez 2 pièces. Pour chaque côté face, mélangez une carte Électropuissance de votre pile de défausse avec votre deck.",
		en: "Flip 2 coins. For each heads, shuffle an Electropower card from your discard pile into your deck.",
		es: "Lanza 2 monedas. Por cada cara, pon 1 carta de Electropoder de tu pila de descartes en tu baraja y barájalas todas.",
		it: "Lancia due volte una moneta. Ogni volta che esce testa, rimischia una carta Potenziatore Elettrico dalla tua pila degli scarti e aggiungila al tuo mazzo.",
		pt: "Jogue 2 moedas. Para cada cara, embaralhe 1 carta Eletropoder da sua pilha de descarte no seu baralho.",
		de: "Wirf 2 Münzen. Mische pro Kopf 1 Elektrokraft-Karte aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 369066
	}
}

export default card
