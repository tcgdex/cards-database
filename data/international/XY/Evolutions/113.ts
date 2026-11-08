import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Here Comes Team Rocket!",
		'fr-fr': "Et voilà la Team Rocket !",
		'es-es': "¡Aquí viene el Team Rocket!",
		'it-it': "Arriva il Team Rocket!",
		'pt-br': "Lá vem a Equipe Rocket!",
		'de-de': "Hier kommt Team Rocket!"
	},

	illustrator: "Ken Sugimori",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque joueur tourne toutes ses cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.)",
		'en-us': "Each player turns all of his or her Prize cards face up. (Those Prize cards remain face up for the rest of the game.)",
		'es-es': "Cada jugador pone todas sus cartas de Premio boca arriba. (Esas cartas de Premio permanecerán boca arriba durante el resto de la partida).",
		'it-it': "Entrambi i giocatori girano tutte le loro carte Premio a faccia in su (rimarranno così per il resto della partita).",
		'pt-br': "Cada jogador vira seus cards de Prêmio com a face voltada para cima. (Os cards de Prêmio permanecerão virados para cima pelo resto do jogo.)",
		'de-de': "Beide Spieler decken alle ihre Preiskarten auf. (Diese Preiskarten bleiben für den Rest des Spiels aufgedeckt.)"
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 293475,
		tcgplayer: 124126
	}
}

export default card
