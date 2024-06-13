import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [351],
	set: Set,

	name: {
		en: "Castform",
		fr: "Morphéo",
		es: "Castform",
		it: "Castform",
		pt: "Castform",
		de: "Formeo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Draw",
			fr: "Double Pioche",
			es: "Roba Doble",
			it: "Pescata Doppia",
			pt: "Compra Dupla",
			de: "Zweifachzug"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Hurricane",
			fr: "Vent Violent",
			es: "Vendaval",
			it: "Tifone",
			pt: "Furacão",
			de: "Orkan"
		},

		effect: {
			en: "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve 1 Energía Básica de este Pokémon a 1 de tus Pokémon en Banca.",
			it: "Sposta un'Energia base da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova 1 Energia básica deste Pokémon para 1 dos seus Pokémon no Banco.",
			de: "Verschiebe 1 Basis-Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card