import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [548],
	set: Set,

	name: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'de-de': "Lilminip"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Spin Turn",
			'fr-fr': "Tournoyer",
			'es-es': "Giro y Vuelta",
			'it-it': "Girotondo",
			'pt-br': "Volta Giratória",
			'de-de': "Absatzdreher"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The leaves on its head are highly valued for medicinal purposes. Dry the leaves in the sun, boil them, and then drink the bitter decoction for remarkably effective relief from fatigue.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658509,
				tcgplayer: 272215
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658509,
				tcgplayer: 272215
			}
		},
	],
}

export default card
