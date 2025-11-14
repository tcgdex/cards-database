import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Buneary",
		fr: "Laporeille",
		es: "Buneary",
		'es-mx': "Buneary",
		de: "Haspiror",
		it: "Buneary",
		pt: "Buneary"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Run Around",
			fr: "Course Effrénée",
			es: "Correr Alrededor",
			'es-mx': "Correteo",
			de: "Herumrennen",
			it: "Correre Intorno",
			pt: "Zoar"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno nella tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Kick",
			fr: "Koud'Pied",
			es: "Patada",
			'es-mx': "Patada",
			de: "Tritt",
			it: "Calcio",
			pt: "Chute"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card