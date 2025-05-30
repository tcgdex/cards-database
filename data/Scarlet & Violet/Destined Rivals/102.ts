import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Flittle",
		fr: "Flotillon",
		de: "Flattutu",
		it: "Flittle",
		es: "Flittle",
		pt: "Flittle"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Dash Off",
			fr: "Déguerpissement",
			de: "Wegflitzen",
			it: "Affrettarsi",
			es: "Salir Volando",
			pt: "Corridela"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card