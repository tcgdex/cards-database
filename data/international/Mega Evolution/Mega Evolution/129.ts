import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Surfing Beach",
		'fr-fr': "Plage de Surf",
		'de-de': "Surfstrand",
		'it-it': "Spiaggia dei Surfisti",
		'es-es': "Playa Surfera",
		'pt-br': "Praia de Surfista",
		'es-mx': "Playa Surfera"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Once during each player's turn, that player may switch their Active {W} Pokémon with 1 of their Benched {W} Pokémon.",
		'fr-fr': "Une fois pendant le tour de chaque personne, cette personne-là peut échanger son Pokémon {W} Actif contre l'un de ses Pokémon {W} de Banc.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler sein Aktives {W}-Pokémon gegen 1 {W}-Pokémon auf seiner Bank austauschen.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può scambiare il suo Pokémon {W} attivo con uno dei Pokémon {W} nella propria panchina.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede cambiar su Pokémon {W} Activo por uno de sus Pokémon {W} en Banca.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá trocar o Pokémon {W} Ativo dele por 1 dos Pokémon {W} no Banco dele.",
		'es-mx': "Una vez durante el turno de cada jugador, ese jugador puede cambiar su Pokémon {W} Activo por 1 de sus Pokémon {W} en Banca."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851200,
				tcgplayer: 654468
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851200,
				tcgplayer: 654468
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
		}
	],
}

export default card
