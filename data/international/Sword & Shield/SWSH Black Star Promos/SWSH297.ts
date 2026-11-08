import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [571],
	set: Set,

	name: {
		'fr-fr': "Zoroark de Hisui V",
		'de-de': "Hisui-Zoroark V",
		'es-es': "Zoroark de Hisui V",
		'pt-br': "Zoroark de Hisui V",
		'it-it': "Zoroark di Hisui V",
		'en-us': "Hisuian Zoroark V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'fr-fr': "Retour du Néant",
			'de-de': "Rückkehr in die Leere",
			'es-es': "Retorno Nulo",
			'pt-br': "Retorno para o Vácuo",
			'it-it': "Vuotoritorno",
			'en-us': "Void Return"
		},

		effect: {
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Cyclone Obscur",
			'de-de': "Schattensturm",
			'es-es': "Ciclón Sombra",
			'pt-br': "Ciclone Sombrio",
			'it-it': "Ciclone Ombra",
			'en-us': "Shadow Cyclone"
		},

		effect: {
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 671762
	}
}

export default card
