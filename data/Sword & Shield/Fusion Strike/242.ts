import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Skaters' Park",
		fr: "Skatepark",
		es: "Parque de Patinaje",
		it: "Skatepark",
		pt: "Parque de Skate",
		de: "Skatepark"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Whenever either player's Active Pokémon retreats, put any basic Energy that would be discarded into their hand instead of the discard pile.",
		fr: "Chaque fois que le Pokémon Actif d'un des joueurs bat en retraite, ce joueur ajoute à sa main, plutôt qu'à la pile de défausse, toute l'Énergie de base qu'il devrait défausser.",
		es: "Cada vez que el Pokémon Activo de algún jugador se retire, pon cualquier Energía Básica que se fuese a descartar en su mano en vez de en la pila de descartes.",
		it: "Ogni volta che il Pokémon attivo di un giocatore si ritira, aggiungi qualsiasi Energia base che verrebbe scartata alle carte che ha in mano invece che alla pila degli scarti.",
		pt: "Sempre que o Pokémon Ativo de um dos jogadores recuar, coloque qualquer Energia básica que seria descartada na mão do jogador ao invés da pilha de descarte.",
		de: "Jedes Mal, wenn sich das Aktive Pokémon eines Spielers zurückzieht, nimmt jener Spieler jede Basis-Energie, die auf den Ablagestapel gelegt würde, stattdessen auf seine Hand."
	},

	trainerType: "Stadium",
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582978
	}
}

export default card