import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [134],
	set: Set,

	name: {
		fr: "Aquali V",
		de: "Aquana V",
		es: "Vaporeon V",
		pt: "Vaporeon V",
		it: "Vaporeon V",
		en: "Vaporeon V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Triple Pioche",
			de: "Dreifachzug",
			es: "Triple Robo",
			pt: "Compra Tripla",
			it: "Pescata Tripla",
			en: "Triple Draw"
		},

		effect: {
			fr: "Piochez 3 cartes.",
			de: "Ziehe 3 Karten.",
			es: "Roba 3 cartas.",
			pt: "Compre 3 cartas.",
			it: "Pesca tre carte.",
			en: "Draw 3 cards."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Saut Éclaboussant",
			de: "Platschersprung",
			es: "Salto Salpicadura",
			pt: "Pulo Borrifante",
			it: "Salto Splash",
			en: "Splash Jump"
		},

		effect: {
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 576503
	}
}

export default card