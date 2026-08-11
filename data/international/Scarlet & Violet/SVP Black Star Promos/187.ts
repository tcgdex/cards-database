import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [469],
	set: Set,

	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
		'de-de': "Yanmega",
		'es-es': "Yanmega",
		'it-it': "Yanmega",
		'pt-br': "Yanmega"
	},

	illustrator: "Dsuke",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'de-de': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Gyro Shockwave",
			'fr-fr': "Onde de Choc Gyro",
			'de-de': "Gyro-Schockwelle",
			'es-es': "Onda Giratoria Explosiva",
			'it-it': "Vortexonda d'Urto",
			'pt-br': "Onda de Choques Giroscópica"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 817778,
				tcgplayer: 627724
			},
		}
	],
}

export default card
