import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Hiker",
		'fr-fr': "Montagnard",
		'es-es': "Montañero",
		'it-it': "Montanaro",
		'pt-br': "Montanhista",
		'de-de': "Wanderer"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 5 cartes du dessus du deck de l’un des joueurs et choisissez-en une. Ce joueur mélange les autres cartes avec son deck. Ensuite, placez la carte choisie sur le dessus de ce deck.",
		'en-us': "Look at the top 5 cards of either player’s deck and choose 1 of them. That player shuffles the other cards back into their deck. Then, put the card you chose on top of that deck.",
		'es-es': "Mira las 5 primeras cartas de la baraja de cualquiera de los jugadores y elige 1 de ellas. Ese jugador pone el resto de cartas de nuevo en su baraja y las baraja todas. Después, pon la carta que has elegido en la parte superior de esa baraja.",
		'it-it': "Guarda le prime cinque carte del mazzo di uno dei giocatori e scegline una. Quel giocatore rimischia le altre carte nel suo mazzo. Poi metti la carta che hai scelto in cima a quel mazzo.",
		'pt-br': "Olhe as 5 primeiras cartas do baralho de qualquer um dos jogadores e escolha 1 delas. Aquele jogador embaralha as demais cartas de volta no próprio baralho. Em seguida, coloque a carta escolhida como a primeira carta daquele baralho.",
		'de-de': "Schau dir die obersten 5 Karten des Decks eines der beiden Spieler an und wähle 1 Karte. Jener Spieler mischt die anderen Karten zurück in sein Deck. Lege anschließend die von dir gewählte Karte oben auf jenes Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 361371,
		tcgplayer: 170994
	}
}

export default card
