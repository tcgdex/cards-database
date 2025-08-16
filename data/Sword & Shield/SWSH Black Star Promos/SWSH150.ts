import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [134],
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Vaporeon V",
		fr: "Aquali V",
		de: "Aquana V",
		es: "Vaporeon V",
		pt: "Vaporeon V",
		it: "Vaporeon V"
	},

	rarity: "None",
	hp: 210,
	types: ["Water"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Triple Draw",
			fr: "Triple Pioche",
			de: "Dreifachzug",
			es: "Triple Robo",
			pt: "Compra Tripla",
			it: "Pescata Tripla"
		},

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
			de: "Ziehe 3 Karten.",
			es: "Roba 3 cartas.",
			pt: "Compre 3 cartas.",
			it: "Pesca tre carte."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Splash Jump",
			fr: "Saut Éclaboussant",
			de: "Platschersprung",
			es: "Salto Salpicadura",
			pt: "Pulo Borrifante",
			it: "Salto Splash"
		},

		damage: 90,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Scambia questo Pokémon con uno della tua panchina."
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
