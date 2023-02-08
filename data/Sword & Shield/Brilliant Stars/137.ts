import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Collapsed Stadium",
		fr: "Stade en Ruines",
		es: "Estadio en Ruinas",
		it: "Macerie dello Stadio",
		pt: "Estádio Desmoronado",
		de: "Stadionruine"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Each player can't have more than 4 Benched Pokémon. If a player has 5 or more Benched Pokémon, they discard Benched Pokémon until they have 4 Pokémon on the Bench. The player who played this card discards first. If more than one effect changes the number of Benched Pokémon allowed, use the smaller number.",
		fr: "Aucun joueur ne peut avoir plus de 4 Pokémon de Banc. Si l'un des joueurs a 5 Pokémon de Banc ou plus, il défausse des Pokémon de Banc jusqu'à en avoir 4 sur le Banc. Le joueur qui a joué cette carte défausse en premier. Si plus d'un effet change le nombre de Pokémon de Banc autorisés, utilisez le nombre le plus petit.",
		es: "Ningún jugador puede tener más de 4 Pokémon en Banca. Si un jugador tiene 5 Pokémon en Banca o más, descarta Pokémon en Banca hasta tener 4 Pokémon en la Banca. El jugador que juegue esta carta descarta primero. Si más de un efecto cambia el número de Pokémon en Banca permitidos, se usa el número menor.",
		it: "Ciascun giocatore non può avere più di quattro Pokémon in panchina. Se un giocatore ha cinque o più Pokémon in panchina, ne scarta fino ad averne quattro. Il giocatore che ha giocato questa carta scarta per primo. Se più di un effetto modifica il numero di Pokémon in panchina permessi, adotta il numero più piccolo.",
		pt: "Cada jogador não pode ter mais de 4 Pokémon no Banco. Se um jogador tiver 5 ou mais Pokémon no Banco, deverá descartar Pokémon até ter 4 Pokémon no Banco. O jogador que jogou esta carta descarta primeiro. Se mais de um efeito alterar o número permitido de Pokémon no Banco, use o menor número.",
		de: "Jeder Spieler kann nicht mehr als 4 Pokémon auf seiner Bank haben. Wenn ein Spieler 5 oder mehr Pokémon auf seiner Bank hat, legt er so lange Pokémon auf den Ablagestapel, bis er 4 Pokémon auf seiner Bank hat. Der Spieler, der diese Karte gespielt hat, legt als Erster ab. Wenn mehr als 1 Effekt die Anzahl der auf der Bank erlaubten Pokémon verändert, verwende die kleinere Anzahl."
	},

	trainerType: "Stadium",
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card