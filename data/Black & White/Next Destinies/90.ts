import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Pokémon Center",
		fr: "Centre Pokémon",
		es: "Centro Pokémon",
		it: "Centro Pokémon",
		pt: "Centro de Pokémon",
		de: "Pokémon-Center"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut soigner 20 dégâts à 1 de ses Pokémon de Banc.",
		en: "Once during each player’s turn, that player may heal 20 damage from 1 of his or her Benched Pokémon.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede curar 20 puntos de daño a 1 de sus Pokémon en Banca.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può curare 20 danni da uno dei suoi Pokémon in panchina.",
		pt: "Uma vez, durante a vez de jogar de cada jogador, aquele jogador poderá curar 20 de danos de 1 dos seus Pokémon no Banco.",
		de: "Einmal während seines Zuges darf jeder Spieler 20 Schadenspunkte bei 1 seiner Pokémon auf der Bank heilen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 280315
	}
}

export default card
