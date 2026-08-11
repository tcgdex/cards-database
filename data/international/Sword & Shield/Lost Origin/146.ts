import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [571],
	set: Set,

	name: {
		'en-us': "Hisuian Zoroark V",
		'fr-fr': "Zoroark de Hisui V",
		'es-es': "Zoroark de Hisui V",
		'it-it': "Zoroark di Hisui V",
		'pt-br': "Zoroark de Hisui V",
		'de-de': "Hisui-Zoroark V"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'en-us': "Void Return",
			'fr-fr': "Retour du Néant",
			'es-es': "Retorno Nulo",
			'it-it': "Vuotoritorno",
			'pt-br': "Retorno para o Vácuo",
			'de-de': "Rückkehr in die Leere"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Shadow Cyclone",
			'fr-fr': "Cyclone Obscur",
			'es-es': "Ciclón Sombra",
			'it-it': "Ciclone Ombra",
			'pt-br': "Ciclone Sombrio",
			'de-de': "Schattensturm"
		},

		effect: {
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674156,
				tcgplayer: 284074
			}
		},
	],
}

export default card
