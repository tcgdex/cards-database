import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Magma Basin",
		fr: "Bassin de Magma",
		es: "Cuenca de Magma",
		it: "Bacino di Magma",
		pt: "Reservatório de Magma",
		de: "Magmabecken"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Once during each player's turn, that player may attach a Fire Energy card from their discard pile to 1 of their Benched Fire Pokémon. If a player attached Energy to a Pokémon in this way, put 2 damage counters on that Pokémon.",
		fr: "Une fois pendant le tour de chaque joueur, ce joueur-là peut attacher une carte Énergie Fire de sa pile de défausse à l'un de ses Pokémon Fire de Banc. Si un joueur a attaché de l'Énergie à un Pokémon de cette façon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede unir 1 carta de Energía Fire de su pila de descartes a 1 de sus Pokémon Fire en Banca. Si algún jugador ha unido Energía a un Pokémon de esta manera, se ponen 2 contadores de daño en ese Pokémon.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può assegnare a uno dei suoi Pokémon Fire in panchina una carta Energia Fire dalla sua pila degli scarti. Se un giocatore ha assegnato dell'Energia a un Pokémon in questo modo, metti due segnalini danno su quel Pokémon.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá ligar 1 carta de Energia Fire da própria pilha de descarte a 1 dos próprios Pokémon Fire no Banco. Se um jogador ligou Energia a um Pokémon desta forma, coloque 2 contadores de dano naquele Pokémon.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler 1 Fire-Energiekarte aus seinem Ablagestapel an 1 Fire-Pokémon auf seiner Bank legen. Wenn ein Spieler auf diese Weise Energie an ein Pokémon angelegt hat, lege 2 Schadensmarken auf jenes Pokémon."
	},

	trainerType: "Stadium",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608690,
		tcgplayer: 257310
	}
}

export default card