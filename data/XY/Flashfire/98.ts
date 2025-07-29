import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Trick Shovel",
		fr: "Pelle Rusée",
		es: "Pala Juguetona",
		it: "Paletta Dispettosa",
		pt: "Pá Travessa",
		de: "Trickschaufel"
	},

	illustrator: "PLANETA",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez la carte du dessus du deck de l'un des joueurs. Vous pouvez défausser la carte regardée ou la remettre sur le dessus du deck.",
		en: "Look at the top card of either player's deck. You may discard that card or return it to the top of the deck.",
		es: "Mira la primera carta de la baraja de cualquiera de los jugadores. Puedes descartar esa carta o devolverla a la parte superior de la baraja.",
		it: "Guarda la carta in cima al mazzo di uno dei giocatori. Puoi scartare quella carta o rimetterla in cima al mazzo.",
		pt: "Olhe o card de cima do baralho de cada jogador. Você pode descartá-lo ou devolvê-lo para cima do baralho.",
		de: "Schau dir die oberste Karte des Decks eines Spielers an. Du kannst diese Karte auf den Ablagestapel oder zurück auf das Deck legen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281581
	}
}

export default card
