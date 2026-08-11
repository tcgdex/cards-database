import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Hex Maniac",
		'fr-fr': "Mystimaniac",
		'es-es': "Bruja",
		'it-it': "Streghetta",
		'pt-br': "Maníaco de Feitiços",
		'de-de': "Hexe"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "Until the end of your opponent's next turn, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities. (This includes cards that come into play on that turn.)",
		'fr-fr': "Jusqu'à la fin du prochain tour de votre adversaire, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent. (Cela comprend les cartes qui sont en jeu pendant ce tour.)",
		'es-es': "Hasta el final del próximo turno de tu rival, los Pokémon en juego, en la mano de cada jugador y en la pila de descartes de cada jugador no tienen ninguna habilidad. (Esto incluye cartas que entran en juego durante ese turno).",
		'it-it': "Fino alla fine del prossimo turno del tuo avversario, le abilità dei Pokémon in gioco, in mano ai giocatori o nelle loro pile degli scarti non hanno più effetto (incluse quelle delle carte entrate in gioco in quel turno).",
		'pt-br': "Até ao final da próxima vez de jogar do seu oponente, cada Pokémon em jogo, na mão de cada jogador e na pilha de descarte de cada jogador não possui Habilidades. (Isso inclui os cards que entram em jogo nessa rodada).",
		'de-de': "Bis zum Ende des nächsten Zuges deines Gegners hat jedes Pokémon im Spiel, auf den Händen jedes Spielers und im Ablagestapel jedes Spielers keine Fähigkeiten. (Dazu gehören Karten, die während des Zuges ins Spiel kommen.)"
	},

	thirdParty: {
		cardmarket: 284256
	}
}

export default card
