import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Surfing Beach",
		fr: "Plage de Surf",
		de: "Surfstrand",
		it: "Spiaggia dei Surfisti",
		es: "Playa Surfera",
		pt: "Praia de Surfista",
		'es-mx': "Playa Surfera"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Once during each player's turn, that player may switch their Active {W} Pokémon with 1 of their Benched {W} Pokémon.",
		fr: "Une fois pendant le tour de chaque personne, cette personne-là peut échanger son Pokémon {W} Actif contre l'un de ses Pokémon {W} de Banc.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler sein Aktives {W}-Pokémon gegen 1 {W}-Pokémon auf seiner Bank austauschen.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può scambiare il suo Pokémon {W} attivo con uno dei Pokémon {W} nella propria panchina.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede cambiar su Pokémon {W} Activo por uno de sus Pokémon {W} en Banca.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá trocar o Pokémon {W} Ativo dele por 1 dos Pokémon {W} no Banco dele.",
		'es-mx': "Una vez durante el turno de cada jugador, ese jugador puede cambiar su Pokémon {W} Activo por 1 de sus Pokémon {W} en Banca."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
		}
	],

	thirdParty: {
		tcgplayer: 654468,
		cardmarket: 851200
	}
}

export default card