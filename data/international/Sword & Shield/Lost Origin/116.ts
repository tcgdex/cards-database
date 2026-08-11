import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [336],
	set: Set,

	name: {
		'en-us': "Seviper",
		'fr-fr': "Séviper",
		'es-es': "Seviper",
		'it-it': "Seviper",
		'pt-br': "Seviper",
		'de-de': "Vipitis"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Sucker Punch and Turn",
			'fr-fr': "Coup Bas Évasif",
			'es-es': "Golpe Bajo y Cambio",
			'it-it': "Sbigoattacco e Svolta",
			'pt-br': "Soco e Giro Enganadores",
			'de-de': "Tiefschlag und Wende"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Darkness Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon Darkness de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon Darkness en Banca.",
			'it-it': "Scambia questo Pokémon con uno dei Pokémon Darkness della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon Darkness no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Darkness-Pokémon auf deiner Bank aus."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674129,
				tcgplayer: 284015
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674129,
				tcgplayer: 284015
			}
		},
	],
}

export default card
