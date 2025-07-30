import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Shaymin",
		fr: "Shaymin",
		es: "Shaymin",
		pt: "Shaymin",
		it: "Shaymin",
		de: "Shaymin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Reflect Energy",
			fr: "Renvoi d'Énergie",
			es: "Reflejar Energía",
			pt: "Refletir Energia",
			it: "Rifletti Energia",
			de: "Energiereflexion"
		},

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			pt: "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Amelicart",

	thirdParty: {
		cardmarket: 805479
	}
}

export default card