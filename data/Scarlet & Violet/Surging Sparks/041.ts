import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Feebas",
		fr: "Barpau",
		es: "Feebas",
		it: "Feebas",
		pt: "Feebas",
		de: "Barschwa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Leap Out",
			fr: "Bondir",
			es: "Saltar del Agua",
			it: "Sguizzata",
			pt: "Pular Fora",
			de: "Herausspringen"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		}
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
