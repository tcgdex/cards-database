import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Skaters' Park",
		'fr-fr': "Skatepark",
		'es-es': "Parque de Patinaje",
		'it-it': "Skatepark",
		'pt-br': "Parque de Skate",
		'de-de': "Skatepark"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Whenever either player's Active Pokémon retreats, put any basic Energy that would be discarded into their hand instead of the discard pile.",
		'fr-fr': "Chaque fois que le Pokémon Actif d'un des joueurs bat en retraite, ce joueur ajoute à sa main, plutôt qu'à la pile de défausse, toute l'Énergie de base qu'il devrait défausser.",
		'es-es': "Cada vez que el Pokémon Activo de algún jugador se retire, pon cualquier Energía Básica que se fuese a descartar en su mano en vez de en la pila de descartes.",
		'it-it': "Ogni volta che il Pokémon attivo di un giocatore si ritira, aggiungi qualsiasi Energia base che verrebbe scartata alle carte che ha in mano invece che alla pila degli scarti.",
		'pt-br': "Sempre que o Pokémon Ativo de um dos jogadores recuar, coloque qualquer Energia básica que seria descartada na mão do jogador ao invés da pilha de descarte.",
		'de-de': "Jedes Mal, wenn sich das Aktive Pokémon eines Spielers zurückzieht, nimmt jener Spieler jede Basis-Energie, die auf den Ablagestapel gelegt würde, stattdessen auf seine Hand."
	},

	trainerType: "Stadium",
	regulationMark: "E",
	illustrator: "Oswaldo KATO",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582978,
				tcgplayer: 253121
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582978,
				tcgplayer: 253121
			}
		},
	],
}

export default card
