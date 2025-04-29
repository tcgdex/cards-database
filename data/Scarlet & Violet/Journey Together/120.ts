import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
		es: "Dunsparce",
		de: "Dummisel",
		it: "Dunsparce",
		pt: "Dunsparce",
		'es-mx': "Dunsparce"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Trading Places",
			fr: "Permutation",
			es: "Cambio de Puesto",
			de: "Platztausch",
			it: "Avvicendamento",
			pt: "Locais de Troca",
			'es-mx': "Cambio de Lugar"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			de: "Ramme",
			it: "Carica",
			pt: "Aríete",
			'es-mx': "Colisión"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
