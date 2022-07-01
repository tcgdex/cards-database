import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Lure Module",
		fr: "Module Leurre",
		es: "Módulo Cebo",
		it: "Modulo Esca",
		pt: "Módulo Atrair",
		de: "Lockmodul"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Each player reveals the top 3 cards of their deck and puts all Pokémon they find there into their hand. Then, each player shuffles the other cards back into their deck.",
		fr: "Chaque joueur montre les 3 cartes du dessus de son deck et ajoute à sa main tous les Pokémon qu'il y trouve. Ensuite, chaque joueur mélange les autres cartes avec son deck.",
		es: "Cada jugador enseña las 3 primeras cartas de su baraja y pone todos los Pokémon que encuentre entre ellas en su mano. Después, cada jugador pone el resto de las cartas de nuevo en su baraja y las baraja todas.",
		it: "Ciascun giocatore mostra le prime tre carte del proprio mazzo e aggiunge i Pokémon presenti tra esse alle carte che ha in mano. Poi ciascun giocatore rimischia le altre carte nel proprio mazzo.",
		pt: "Cada jogador revela as 3 cartas de cima do próprio baralho e coloca todos os Pokémon que encontrar lá na própria mão. Em seguida, cada jogador embaralha as demais cartas de volta no próprio baralho.",
		de: "Jeder Spieler zeigt die obersten 3 Karten seines Decks und nimmt alle Pokémon, die er dort findet, auf seine Hand. Anschließend mischt jeder Spieler die anderen Karten zurück in sein Deck."
	},

	trainerType: "Item",
	regulationMark: "F"
}

export default card