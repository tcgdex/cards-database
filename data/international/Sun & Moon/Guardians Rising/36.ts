import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Alomomola",
		'fr-fr': "Mamanbo",
		'es-es': "Alomomola",
		'it-it': "Alomomola",
		'pt-br': "Alomomola",
		'de-de': "Mamolida"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		594,
	],

	hp: 110,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Borne Ashore",
				'fr-fr': "Ramené au Rivage",
				'es-es': "A la Orilla",
				'it-it': "Verso Riva",
				'pt-br': "À Costa",
				'de-de': "An Land gespült"
			},
			effect: {
				'en-us': "Put a Basic Pokémon from either player’s discard pile onto its owner’s Bench.",
				'fr-fr': "Prenez un Pokémon de base dans la pile de défausse d’un des joueurs et placez-le sur son Banc.",
				'es-es': "Pon 1 Pokémon Básico de la pila de descartes de cualquier jugador en la Banca de su dueño.",
				'it-it': "Prendi un Pokémon Base dalla pila degli scarti di uno dei giocatori e mettilo nella panchina del suo proprietario.",
				'pt-br': "Coloque 1 Pokémon Básico da pilha de descarte de qualquer um dos jogadores no Banco do dono dele.",
				'de-de': "Lege ein Basis-Pokémon aus dem Ablagestapel eines der beiden Spieler auf die Bank seines Besitzers."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Splash",
				'fr-fr': "Hydro-éclaboussure",
				'es-es': "Hidroestallido",
				'it-it': "Idrosplash",
				'pt-br': "Hidro Borrifada",
				'de-de': "Hydroplatscher"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It uses its special mucus to close the wounds of injured Pokémon. The reason for this behavior remains unknown.",
	},

	thirdParty: {
		cardmarket: 297498,
		tcgplayer: 130936
	}
}

export default card
