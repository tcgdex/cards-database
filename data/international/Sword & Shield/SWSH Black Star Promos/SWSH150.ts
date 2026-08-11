import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [134],
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		'en-us': "Vaporeon V",
		'fr-fr': "Aquali V",
		'de-de': "Aquana V",
		'es-es': "Vaporeon V",
		'pt-br': "Vaporeon V",
		'it-it': "Vaporeon V"
	},

	rarity: "Promo",
	hp: 210,
	types: ["Water"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Triple Draw",
			'fr-fr': "Triple Pioche",
			'de-de': "Dreifachzug",
			'es-es': "Triple Robo",
			'pt-br': "Compra Tripla",
			'it-it': "Pescata Tripla"
		},

		effect: {
			'en-us': "Draw 3 cards.",
			'fr-fr': "Piochez 3 cartes.",
			'de-de': "Ziehe 3 Karten.",
			'es-es': "Roba 3 cartas.",
			'pt-br': "Compre 3 cartas.",
			'it-it': "Pesca tre carte."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Splash Jump",
			'fr-fr': "Saut Éclaboussant",
			'de-de': "Platschersprung",
			'es-es': "Salto Salpicadura",
			'pt-br': "Pulo Borrifante",
			'it-it': "Salto Splash"
		},

		damage: 90,

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina."
		}
	}],

	regulationMark: "E",
	suffix: "V",
	retreat: 2,

	thirdParty: {
		cardmarket: 576503
	}
}

export default card
