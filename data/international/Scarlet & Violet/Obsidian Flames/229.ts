import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Cuencia",
		'en-us': "Artazon",
		'es-es': "Pueblo Altamía",
		'it-it': "Los Tazones",
		'pt-br': "Artazon",
		'de-de': "Bolardin"
	},

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Une fois pendant le tour de chaque joueur, ce joueur-là peut chercher dans son deck un Pokémon de base sans encadré Règle et le placer sur son Banc. Ce joueur mélange ensuite son deck. (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
		'en-us': "Once during each player's turn, that player may search their deck for a Basic Pokémon that doesn't have a Rule Box and put it onto their Bench. Then, that player shuffles their deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede buscar en su baraja 1 Pokémon Básico que no tenga un recuadro de regla y ponerlo en su Banca. Después, ese jugador baraja las cartas de su baraja. (Pokémon ex, Pokémon V, etc. tienen recuadros de regla).",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può cercare nel suo mazzo un Pokémon Base che non ha una regola speciale e metterlo nella sua panchina. Poi quel giocatore rimischia le carte del suo mazzo. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá procurar no próprio baralho por um Pokémon Básico que não tiver uma Caixa de Regras e colocá-lo no próprio Banco. Em seguida, aquele jogador embaralha o próprio baralho. (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler sein Deck nach 1 Basis-Pokémon, das kein Regelfeld hat, durchsuchen und es auf seine Bank legen. Anschließend mischt jener Spieler sein Deck. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)"
	},

	trainerType: "Stadium",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725309,
				tcgplayer: 509990,
				cardtrader: 255669
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card
