import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [336],
	set: Set,

	name: {
		en: "Seviper",
		fr: "Séviper",
		es: "Seviper",
		it: "Seviper",
		pt: "Seviper",
		de: "Vipitis"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Sucker Punch and Turn",
			fr: "Coup Bas Évasif",
			es: "Golpe Bajo y Cambio",
			it: "Sbigoattacco e Svolta",
			pt: "Soco e Giro Enganadores",
			de: "Tiefschlag und Wende"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Darkness Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon Darkness de Banc.",
			es: "Cambia este Pokémon por 1 de tus Pokémon Darkness en Banca.",
			it: "Scambia questo Pokémon con uno dei Pokémon Darkness della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon Darkness no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Darkness-Pokémon auf deiner Bank aus."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card