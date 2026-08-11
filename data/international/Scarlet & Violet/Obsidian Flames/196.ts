import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Centre Commercial",
		'en-us': "Town Store",
		'es-es': "Tienda Local",
		'it-it': "Grande Magazzino",
		'pt-br': "Loja da Cidade",
		'de-de': "Stadtgeschäft"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		'fr-fr': "Une fois pendant le tour de chaque joueur, ce joueur-là peut chercher dans son deck une carte Outil Pokémon, la montrer et l'ajouter à sa main. Ce joueur mélange ensuite son deck.",
		'en-us': "Once during each player's turn, that player may search their deck for a Pokémon Tool card, reveal it, and put it into their hand. Then, that player shuffles their deck.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede buscar en su baraja 1 carta de Herramienta Pokémon, enseñarla y ponerla en su mano. Después, ese jugador baraja las cartas de su baraja.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può cercare nel suo mazzo una carta Oggetto Pokémon, mostrarla e aggiungerla alle carte che ha in mano. Poi quel giocatore rimischia le carte del suo mazzo.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá procurar no próprio baralho por uma carta de Ferramenta Pokémon, revelá-la e colocá-la na própria mão. Em seguida, aquele jogador embaralha o próprio baralho.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler sein Deck nach 1 Pokémon-Ausrüstung durchsuchen, sie seinem Gegner zeigen und auf seine Hand nehmen. Anschließend mischt jener Spieler sein Deck."
	},

	trainerType: "Stadium",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725276,
				tcgplayer: 509788,
				cardtrader: 256092
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725276,
				tcgplayer: 509788,
				cardtrader: 256092
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card
