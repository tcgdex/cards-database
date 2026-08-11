import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [206],
	set: Set,

	name: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'es-es': "Dunsparce",
		'de-de': "Dummisel",
		'it-it': "Dunsparce",
		'pt-br': "Dunsparce",
		'es-mx': "Dunsparce"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Trading Places",
			'fr-fr': "Permutation",
			'es-es': "Cambio de Puesto",
			'de-de': "Platztausch",
			'it-it': "Avvicendamento",
			'pt-br': "Locais de Troca",
			'es-mx': "Cambio de Lugar"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'de-de': "Ramme",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'es-mx': "Colisión"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Asako Ito",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817272,
				tcgplayer: 623547
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817272,
				tcgplayer: 623547
			}
		},
	],
}

export default card
