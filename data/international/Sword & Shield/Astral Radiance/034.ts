import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [226],
	set: Set,

	name: {
		'en-us': "Mantine",
		'fr-fr': "Démanta",
		'es-es': "Mantine",
		'it-it': "Mantine",
		'pt-br': "Mantine",
		'de-de': "Mantax"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Borne Ashore",
			'fr-fr': "Ramené au Rivage",
			'es-es': "A la Orilla",
			'it-it': "Verso Riva",
			'pt-br': "À Costa",
			'de-de': "An Land gespült"
		},

		effect: {
			'en-us': "Put a Basic Pokémon from either player's discard pile onto that player's Bench.",
			'fr-fr': "Prenez un Pokémon de base dans la pile de défausse de l'un des joueurs et placez-le sur le Banc de ce dernier.",
			'es-es': "Pon 1 Pokémon Básico de la pila de descartes de cualquier jugador en la Banca de ese jugador.",
			'it-it': "Prendi un Pokémon Base dalla pila degli scarti di uno dei giocatori e mettilo nella panchina di quel giocatore.",
			'pt-br': "Coloque 1 Pokémon Básico da pilha de descarte de qualquer um dos jogadores no Banco daquele jogador.",
			'de-de': "Lege 1 Basis-Pokémon aus dem Ablagestapel eines der beiden Spieler auf die Bank jenes Spielers."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Aqua Edge",
			'fr-fr': "Aqua-Dague",
			'es-es': "Filo Agua",
			'it-it': "Acquataglio",
			'pt-br': "Aqua Gume",
			'de-de': "Aquaschneide"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This calm and gentle Pokémon swims gracefully through the sea. After building speed, it can leap out of the water. It is often misidentified as a bird Pokémon due to this behavior.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658542,
				tcgplayer: 272234
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658542,
				tcgplayer: 272234
			}
		},
	],
}

export default card
