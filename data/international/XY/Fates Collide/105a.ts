import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "N",
		'fr-fr': "N",
		'es-es': "N",
		'it-it': "N",
		'pt-br': "N",
		'de-de': "N"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "Each player shuffles his or her hand into his or her deck. Then, each player draws a card for each of his or her remaining Prize cards.",
		'fr-fr': "Chaque joueur mélange sa main avec son deck. Ensuite, chaque joueur pioche une carte pour chacune des cartes Récompense qu'il lui reste.",
		'es-es': "Cada jugador baraja las cartas de su mano en su baraja. Después, cada jugador roba 1 carta por cada una de las cartas de Premio que le queden.",
		'it-it': "Ogni giocatore rimischia le carte che ha in mano nel proprio mazzo. Quindi, ogni giocatore pesca una carta per ogni carta Premio che gli resta.",
		'pt-br': "Cada jogador embaralha sua mão em seu próprio baralho. Em seguida, cada jogador compra um card para cada um dos cards de Prêmio restantes dele(a).",
		'de-de': "Jeder Spieler mischt seine Hand zurück in sein Deck. Anschließend zieht jeder Spieler eine Karte für jede seiner noch übrigen Preiskarten."
	},

	thirdParty: {
		cardmarket: 289925
	}
}

export default card
