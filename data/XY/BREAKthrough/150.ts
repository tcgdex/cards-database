import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Town Map",
		fr: "Carte",
		es: "Mapa",
		it: "Mappa Città",
		pt: "Mapa da Cidade",
		de: "Karte"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Tournez toutes vos cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.)",
		en: "Turn all of your Prize cards face up. (Those Prize cards remain face up for the rest of the game.)",
		es: "Pon todas tus cartas de Premio boca arriba. (Esas cartas de Premio permanecerán boca arriba durante el resto de la partida).",
		it: "Gira tutte le tue carte Premio a faccia in su (rimarranno così per il resto della partita).",
		pt: "Vire todos os seus cards de Prêmio com a face para cima. (Os cards de Prêmio permanecerão virados para cima pelo resto do jogo.)",
		de: "Decke all deine Preiskarten auf. (Diese Preiskarten bleiben für den Rest des Spiels aufgedeckt.)"
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 286396
	}
}

export default card
