import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'es-es': "Buneary",
		'es-mx': "Buneary",
		'de-de': "Haspiror",
		'it-it': "Buneary",
		'pt-br': "Buneary"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [427],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Run Around",
			'fr-fr': "Course Effrénée",
			'es-es': "Correr Alrededor",
			'es-mx': "Correteo",
			'de-de': "Herumrennen",
			'it-it': "Correre Intorno",
			'pt-br': "Zoar"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'it-it': "Scambia questo Pokémon con uno nella tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Kick",
			'fr-fr': "Koud'Pied",
			'es-es': "Patada",
			'es-mx': "Patada",
			'de-de': "Tritt",
			'it-it': "Calcio",
			'pt-br': "Chute"
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

	description: {
		'en-us': "Buneary can attack by rolling up their ears and then striking with the force created by unrolling them. This attack becomes stronger with training.",
	},

	illustrator: "tono",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857658,
				tcgplayer: 662139,
				cardtrader: 356869
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857658,
				tcgplayer: 662139,
				cardtrader: 356869
			}
		},
	],
}

export default card
