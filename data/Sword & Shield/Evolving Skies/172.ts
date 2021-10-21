import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Vaporeon V",
		fr: "Aquali V",
		es: "Vaporeon V",
		it: "Vaporeon V",
		pt: "Vaporeon V",
		de: "Aquana V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			en: "Triple Draw",
			fr: "Triple Pioche",
			es: "Triple Robo",
			it: "Pescata Tripla",
			pt: "Triple Draw",
			de: "Dreifachzug"
		},

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
			es: "Roba 3 cartas.",
			it: "Pesca tre carte.",
			pt: "Draw 3 cards.",
			de: "Ziehe 3 Karten."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Splash Jump",
			fr: "Saut Éclaboussant",
			es: "Salto Salpicadura",
			it: "Salto Splash",
			pt: "Splash Jump",
			de: "Platschersprung"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Switch this Pokémon with 1 of your Benched Pokémon.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
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
	suffix: "V"
}

export default card
