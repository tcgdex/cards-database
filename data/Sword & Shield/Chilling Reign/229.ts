import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Urn of Vitality",
		fr: "Urne de Vitalité",
		es: "Urna Vitalidad",
		it: "Urna del Vigore",
		pt: "Urna de Vitalidade",
		de: "Urne der Vitalität"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Shuffle up to 2 Single Strike Energy cards from your discard pile into your deck.",
		fr: "Mélangez avec votre deck jusqu'à 2 cartes Énergie Poing Final de votre pile de défausse.",
		es: "Pon hasta 2 cartas de Energía Golpe Brusco de tu pila de descartes en tu baraja y barájalas todas.",
		it: "Rimischia fino a due carte Energia Colpo Singolo dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Embaralhe até 2 cartas de Energia Golpe Decisivo da sua pilha de descarte no seu baralho.",
		de: "Mische bis zu 2 Fokussierter-Angriff-Energiekarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	illustrator: "Toyste Beach",
	regulationMark: "E"
}

export default card
