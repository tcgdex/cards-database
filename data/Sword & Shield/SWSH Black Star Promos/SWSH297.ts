import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Zoroark de Hisui V",
		de: "Hisui-Zoroark V",
		es: "Zoroark de Hisui V",
		pt: "Zoroark de Hisui V",
		it: "Zoroark di Hisui V",
		en: "Hisuian Zoroark V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			fr: "Retour du Néant",
			de: "Rückkehr in die Leere",
			es: "Retorno Nulo",
			pt: "Retorno para o Vácuo",
			it: "Vuotoritorno",
			en: "Void Return"
		},

		effect: {
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			en: "You may switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Cyclone Obscur",
			de: "Schattensturm",
			es: "Ciclón Sombra",
			pt: "Ciclone Sombrio",
			it: "Ciclone Ombra",
			en: "Shadow Cyclone"
		},

		effect: {
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			pt: "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card