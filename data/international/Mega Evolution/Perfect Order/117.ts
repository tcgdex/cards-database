import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wondrous Patch",
		'fr-fr': "Fortifiant Merveilleux",
		'es-es': "Refuerzo Prodigioso",
		'es-mx': "Parche Extraordinario",
		'de-de': "Wunderpflaster",
		'it-it': "Distintivo Meraviglioso",
		'pt-br': "Fragmento Encantado"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Attach a Basic {P} Energy card from your discard pile to 1 of your Benched {P} Pokémon.",
		'fr-fr': "Attachez une carte Énergie {P} de base de votre pile de défausse à l'un de vos Pokémon {P} de Banc.",
		'es-es': "Une 1 carta de Energía {P} Básica de tu pila de descartes a uno de tus Pokémon {P} en Banca.",
		'es-mx': "Une 1 carta de Energía {P} Básica de tu pila de descartes a 1 de tus Pokémon {P} en Banca.",
		'de-de': "Lege 1 Basis-{P}-Energiekarte aus deinem Ablagestapel an 1 {P}-Pokémon auf deiner Bank an.",
		'it-it': "Assegna a uno dei Pokémon {P} nella tua panchina una carta Energia base {P} dalla tua pila degli scarti.",
		'pt-br': "Ligue uma carta de Energia {P} Básica da sua pilha de descarte a 1 dos seus Pokémon {P} no Banco."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684331,
				cardmarket: 877534
			}
		}
	],

}

export default card
