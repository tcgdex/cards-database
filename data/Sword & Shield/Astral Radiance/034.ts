import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Mantine"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Borne Ashore",
			fr: "Ramené au Rivage",
			es: "A la Orilla",
			it: "Verso Riva",
			pt: "À Costa",
			de: "An Land gespült"
		},

		effect: {
			en: "Put a Basic Pokémon from either player's discard pile onto that player's Bench.",
			fr: "Prenez un Pokémon de base dans la pile de défausse de l'un des joueurs et placez-le sur le Banc de ce dernier.",
			es: "Pon 1 Pokémon Básico de la pila de descartes de cualquier jugador en la Banca de ese jugador.",
			it: "Prendi un Pokémon Base dalla pila degli scarti di uno dei giocatori e mettilo nella panchina di quel giocatore.",
			pt: "Coloque 1 Pokémon Básico da pilha de descarte de qualquer um dos jogadores no Banco daquele jogador.",
			de: "Lege 1 Basis-Pokémon aus dem Ablagestapel eines der beiden Spieler auf die Bank jenes Spielers."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague",
			es: "Filo Agua",
			it: "Acquataglio",
			pt: "Aqua Gume",
			de: "Aquaschneide"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card