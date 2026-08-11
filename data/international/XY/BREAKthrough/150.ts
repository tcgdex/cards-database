import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Town Map",
		'fr-fr': "Carte",
		'es-es': "Mapa",
		'it-it': "Mappa Città",
		'pt-br': "Mapa da Cidade",
		'de-de': "Karte"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Tournez toutes vos cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.)",
		'en-us': "Turn all of your Prize cards face up. (Those Prize cards remain face up for the rest of the game.)",
		'es-es': "Pon todas tus cartas de Premio boca arriba. (Esas cartas de Premio permanecerán boca arriba durante el resto de la partida).",
		'it-it': "Gira tutte le tue carte Premio a faccia in su (rimarranno così per il resto della partita).",
		'pt-br': "Vire todos os seus cards de Prêmio com a face para cima. (Os cards de Prêmio permanecerão virados para cima pelo resto do jogo.)",
		'de-de': "Decke all deine Preiskarten auf. (Diese Preiskarten bleiben für den Rest des Spiels aufgedeckt.)"
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 286396,
		tcgplayer: 107269
	}
}

export default card
