import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Return Label",
		'fr-fr': "Adresse de Retour",
		'es-es': "Etiqueta de Retorno",
		'it-it': "Ricevuta di Ritorno",
		'pt-br': "Etiqueta de Retorno",
		'de-de': "Rücksendeetikett"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Placez une carte de la pile de défausse de votre adversaire en dessous de son deck.",
		'en-us': "Put a card from your opponent’s discard pile on the bottom of their deck.",
		'es-es': "Pon 1 carta de la pila de descartes de tu rival en la parte inferior de su baraja.",
		'it-it': "Prendi una carta dalla pila degli scarti del tuo avversario e mettila in fondo al suo mazzo.",
		'pt-br': "Coloque 1 carta da pilha de descarte do seu oponente como a última carta do baralho dele(a).",
		'de-de': "Lege 1 Karte aus dem Ablagestapel deines Gegners unter sein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 369078,
		tcgplayer: 183956
	}
}

export default card
