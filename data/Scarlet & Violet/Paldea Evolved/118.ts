import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Quartermac",
		en: "Passimian",
		es: "Passimian",
		it: "Passimian",
		pt: "Passimian",
		de: "Quartermak"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Passe Décisive",
			en: "Make the Assist",
			es: "Prestar Ayuda",
			it: "Fare un Assist",
			pt: "Dar Assistência",
			de: "Zuspielen"
		},

		effect: {
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			es: "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card