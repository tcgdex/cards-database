import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'fr-fr': "Pikachu VMAX",
		'de-de': "Pikachu VMAX",
		'es-es': "Pikachu VMAX",
		'pt-br': "Pikachu VMAX",
		'it-it': "Pikachu VMAX",
		'en-us': "Pikachu VMAX"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	evolveFrom: {
		'fr-fr': "Pikachu-V",
		'de-de': "Pikachu-V",
		'es-es': "Pikachu V",
		'pt-br': "Pikachu V",
		'it-it': "Pikachu-V",
		'en-us': "Pikachu V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Queue Chargeuse",
			'de-de': "Schweifladung",
			'es-es': "Carga de Cola",
			'pt-br': "Carga de Cauda",
			'it-it': "Coda Elettrizzante",
			'en-us': "Tail Charge"
		},

		effect: {
			'fr-fr': "Attachez jusqu'à 3 cartes Énergie {L} de votre pile de défausse à l'un de vos Pokémon.",
			'de-de': "Lege bis zu 3 {L}-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an.",
			'es-es': "Une hasta 3 cartas de Energía {L} de tu pila de descartes a 1 de tus Pokémon.",
			'pt-br': "Ligue até 3 cartas de Energia {L} da sua pilha de descarte a 1 dos seus Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon fino a tre carte Energia {L} dalla tua pila degli scarti.",
			'en-us': "Attach up to 3 {L} Energy cards from your discard pile to 1 of your Pokémon."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Fatal-Foudre G-Max",
			'de-de': "Giga-Donner",
			'es-es': "Gigatrueno",
			'pt-br': "Trovão G-Max",
			'it-it': "Gigatuono",
			'en-us': "G-Max Thunder"
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 461594,
		tcgplayer: 478424
	}
}

export default card
