import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886507,
				tcgplayer: 693551
			}
		},
	],

	name: {
		en: "Surfing Beach",
		fr: "Plage de Surf",
		es: "Playa Surfera",
		'es-mx': "Playa Surfera",
		de: "Surfstrand",
		it: "Spiaggia dei Surfisti",
		pt: "Praia de Surfista"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Stadium",
	regulationMark: "I",

	effect: {
		en: "Once during each player's turn, that player may switch their Active {W} Pokémon with 1 of their Benched {W} Pokémon.",
		fr: "Une fois pendant le tour de chaque personne, cette personne-là peut échanger son Pokémon {W} Actif contre l'un de ses Pokémon {W} de Banc.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede cambiar su Pokémon {W} Activo por uno de sus Pokémon {W} en Banca.",
		'es-mx': "Una vez durante el turno de cada jugador, ese jugador puede cambiar su Pokémon {W} Activo por 1 de sus Pokémon {W} en Banca.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler sein Aktives {W}-Pokémon gegen 1 {W}-Pokémon auf seiner Bank austauschen.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può scambiare il suo Pokémon {W} attivo con uno dei Pokémon {W} nella propria panchina.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá trocar o Pokémon {W} Ativo dele por 1 dos Pokémon {W} no Banco dele."
	}
}

export default card
