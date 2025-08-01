import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Alomomola",
		fr: "Mamanbo",
		es: "Alomomola",
		it: "Alomomola",
		pt: "Alomomola",
		de: "Mamolida"
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
				en: "Borne Ashore",
				fr: "Ramené au Rivage",
				es: "A la Orilla",
				it: "Verso Riva",
				pt: "À Costa",
				de: "An Land gespült"
			},
			effect: {
				en: "Put a Basic Pokémon from either player’s discard pile onto its owner’s Bench.",
				fr: "Prenez un Pokémon de base dans la pile de défausse d’un des joueurs et placez-le sur son Banc.",
				es: "Pon 1 Pokémon Básico de la pila de descartes de cualquier jugador en la Banca de su dueño.",
				it: "Prendi un Pokémon Base dalla pila degli scarti di uno dei giocatori e mettilo nella panchina del suo proprietario.",
				pt: "Coloque 1 Pokémon Básico da pilha de descarte de qualquer um dos jogadores no Banco do dono dele.",
				de: "Lege ein Basis-Pokémon aus dem Ablagestapel eines der beiden Spieler auf die Bank seines Besitzers."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-éclaboussure",
				es: "Hidroestallido",
				it: "Idrosplash",
				pt: "Hidro Borrifada",
				de: "Hydroplatscher"
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

	thirdParty: {
		cardmarket: 297498
	}
}

export default card
