import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [641],
	set: Set,

	name: {
		'en-us': "Tornadus",
		'fr-fr': "Boréas",
		'de-de': "Boreos",
		'it-it': "Tornadus",
		'pt-br': "Tornadus",
		'es-es': "Tornadus",
		'es-mx': "Tornadus"
	},

	illustrator: "Nisota Niso",
	rarity: "Rare",
	category: "Pokemon",
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
			'pt-br': "Embrulhado no Vento",
			'es-es': "Envuelto en Viento",
			'es-mx': "Cubierta Eólica"
		},

		effect: {
			'en-us': "Attach a Basic Energy card from your hand to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie de base de votre main à ce Pokémon.",
			'de-de': "Lege 1 Basis-Energiekarte aus deiner Hand an dieses Pokémon an.",
			'it-it': "Assegna a questo Pokémon una carta Energia base dalla tua mano.",
			'pt-br': "Ligue uma carta de Energia Básica da sua mão a este Pokémon.",
			'es-es': "Une 1 carta de Energía Básica de tu mano a este Pokémon.",
			'es-mx': "Une 1 carta de Energía Básica de tu mano a este Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hurricane",
			'fr-fr': "Vent Violent",
			'de-de': "Orkan",
			'it-it': "Tifone",
			'pt-br': "Furacão",
			'es-es': "Vendaval",
			'es-mx': "Huracán"
		},

		effect: {
			'en-us': "Move a Basic Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'de-de': "Verschiebe 1 Basis-Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'it-it': "Sposta un'Energia base da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova uma Energia Básica deste Pokémon para 1 dos seus Pokémon no Banco.",
			'es-es': "Mueve 1 Energía Básica de este Pokémon a uno de tus Pokémon en Banca.",
			'es-mx': "Mueve 1 Energía Básica de este Pokémon a 1 de tus Pokémon en Banca."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836044,
				tcgplayer: 642193
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836638,
				tcgplayer: 642433
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836639,
				tcgplayer: 642361
			}
		},
	],
}

export default card
