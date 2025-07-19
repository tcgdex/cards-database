import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Tornadus",
		fr: "Boréas",
		de: "Boreos",
		it: "Tornadus",
		pt: "Tornadus",
		es: "Tornadus",
		'es-mx': "Tornadus"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Wrapped in Wind",
			fr: "Enveloppement Éolien",
			de: "Windhülle",
			it: "Ventavvolto",
			pt: "Embrulhado no Vento",
			es: "Envuelto en Viento",
			'es-mx': "Cubierta Eólica"
		},

		effect: {
			en: "Attach a Basic Energy card from your hand to this Pokémon.",
			fr: "Attachez une carte Énergie de base de votre main à ce Pokémon.",
			de: "Lege 1 Basis-Energiekarte aus deiner Hand an dieses Pokémon an.",
			it: "Assegna a questo Pokémon una carta Energia base dalla tua mano.",
			pt: "Ligue uma carta de Energia Básica da sua mão a este Pokémon.",
			es: "Une 1 carta de Energía Básica de tu mano a este Pokémon.",
			'es-mx': "Une 1 carta de Energía Básica de tu mano a este Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hurricane",
			fr: "Vent Violent",
			de: "Orkan",
			it: "Tifone",
			pt: "Furacão",
			es: "Vendaval",
			'es-mx': "Huracán"
		},

		effect: {
			en: "Move a Basic Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
			de: "Verschiebe 1 Basis-Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			it: "Sposta un'Energia base da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova uma Energia Básica deste Pokémon para 1 dos seus Pokémon no Banco.",
			es: "Mueve 1 Energía Básica de este Pokémon a uno de tus Pokémon en Banca.",
			'es-mx': "Mueve 1 Energía Básica de este Pokémon a 1 de tus Pokémon en Banca."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card