import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "PokéStop",
		fr: "PokéStop",
		es: "Poképarada",
		it: "Pokéstop",
		pt: "Poképarada",
		de: "PokéStop"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Once during each player's turn, that player may discard 3 cards from the top of their deck. If a player discarded any Item cards in this way, they put those Item cards into their hand.",
		fr: "Une fois pendant le tour de chaque joueur, ce joueur-là peut défausser 3 cartes du dessus de son deck. Si un joueur a défaussé des cartes Objet de cette façon, il peut mettre ces cartes Objet dans sa main.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede descartar 3 cartas de la parte superior de su baraja. Si algún jugador ha descartado alguna carta de Objeto de esta manera, pone esas cartas de Objeto en su mano.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può scartare tre carte dalla cima del proprio mazzo. Se un giocatore ha scartato delle carte Strumento in questo modo, aggiunge quelle carte Strumento alle carte che ha in mano.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá descartar as 3 cartas de cima do próprio baralho. Se um jogador descartou qualquer carta de Item desta forma, colocará aquelas cartas de Item na própria mão.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler die obersten 3 Karten seines Decks auf den Ablagestapel legen. Wenn ein Spieler auf diese Weise mindestens 1 Itemkarte auf den Ablagestapel gelegt hat, nimmt jener Spieler jene Itemkarten auf seine Hand."
	},

	trainerType: "Stadium",
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card