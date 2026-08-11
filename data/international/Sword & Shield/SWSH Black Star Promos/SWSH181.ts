import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [134],
	set: Set,

	name: {
		'fr-fr': "Aquali V",
		'de-de': "Aquana V",
		'es-es': "Vaporeon V",
		'pt-br': "Vaporeon V",
		'it-it': "Vaporeon V",
		'en-us': "Vaporeon V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Triple Pioche",
			'de-de': "Dreifachzug",
			'es-es': "Triple Robo",
			'pt-br': "Compra Tripla",
			'it-it': "Pescata Tripla",
			'en-us': "Triple Draw"
		},

		effect: {
			'fr-fr': "Piochez 3 cartes.",
			'de-de': "Ziehe 3 Karten.",
			'es-es': "Roba 3 cartas.",
			'pt-br': "Compre 3 cartas.",
			'it-it': "Pesca tre carte.",
			'en-us': "Draw 3 cards."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'fr-fr': "Saut Éclaboussant",
			'de-de': "Platschersprung",
			'es-es': "Salto Salpicadura",
			'pt-br': "Pulo Borrifante",
			'it-it': "Salto Splash",
			'en-us': "Splash Jump"
		},

		effect: {
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 516359
	}
}

export default card
