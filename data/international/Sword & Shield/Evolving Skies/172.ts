import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Vaporeon V",
		'fr-fr': "Aquali V",
		'es-es': "Vaporeon V",
		'it-it': "Vaporeon V",
		'pt-br': "Vaporeon V",
		'de-de': "Aquana V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			'en-us': "Triple Draw",
			'fr-fr': "Triple Pioche",
			'es-es': "Triple Robo",
			'it-it': "Pescata Tripla",
			'pt-br': "Triple Draw",
			'de-de': "Dreifachzug"
		},

		effect: {
			'en-us': "Draw 3 cards.",
			'fr-fr': "Piochez 3 cartes.",
			'es-es': "Roba 3 cartas.",
			'it-it': "Pesca tre carte.",
			'pt-br': "Draw 3 cards.",
			'de-de': "Ziehe 3 Karten."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Splash Jump",
			'fr-fr': "Saut Éclaboussant",
			'es-es': "Salto Salpicadura",
			'it-it': "Salto Splash",
			'pt-br': "Splash Jump",
			'de-de': "Platschersprung"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	dexId: [134],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574230,
				tcgplayer: 246734
			}
		},
	],
}

export default card
