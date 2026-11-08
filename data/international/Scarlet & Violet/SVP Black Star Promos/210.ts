import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tornadus",
		'fr-fr': "Boréas",
		'de-de': "Boreos",
		'it-it': "Tornadus",
		'es-es': "Tornadus",
		'pt-br': "Tornadus"
	},

	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [641],
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Wrapped in Wind",
			'fr-fr': "Enveloppement Éolien",
			'de-de': "Windhülle",
			'it-it': "Ventavvolto",
			'es-es': "Envuelto en Viento",
			'pt-br': "Embrulhado no Vento"
	},

		effect: {
			'en-us': "Attach a Basic Energy card from your hand to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie de base de votre main à ce Pokémon.",
			'de-de': "Lege 1 Basis-Energiekarte aus deiner Hand an dieses Pokémon an.",
			'it-it': "Assegna a questo Pokémon una carta Energia base dalla tua mano.",
			'es-es': "Une 1 carta de Energía Básica de tu mano a este Pokémon.",
			'pt-br': "Ligue uma carta de Energia Básica da sua mão a este Pokémon."
	}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hurricane",
			'fr-fr': "Vent Violent",
			'de-de': "Orkan",
			'it-it': "Tifone",
			'es-es': "Vendaval",
			'pt-br': "Furacão"
	},

		effect: {
			'en-us': "Move a Basic Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'de-de': "Verschiebe 1 Basis-Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'it-it': "Sposta un'Energia base da questo Pokémon a uno di quelli nella tua panchina.",
			'es-es': "Mueve 1 Energía Básica de este Pokémon a uno de tus Pokémon en Banca.",
			'pt-br': "Mova uma Energia Básica deste Pokémon para 1 dos seus Pokémon no Banco."
	},

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836656,
				tcgplayer: 644835
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 836666,
				tcgplayer: 644836
			},
		}
	],
}

export default card
