import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys",
		'es-es': "Cascoon",
		'es-mx': "Cascoon",
		'de-de': "Panekon",
		'it-it': "Cascoon",
		'pt-br': "Cascoon"
	},

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
		'es-es': "Wurmple",
		'es-mx': "Wurmple",
		'de-de': "Waumpel",
		'it-it': "Wurmple",
		'pt-br': "Wurmple",
	},

	illustrator: "Dsuke",
	rarity: "Common",
	category: "Pokemon",
	dexId: [268],
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Trading Places",
			'fr-fr': "Permutation",
			'es-es': "Cambio de Puesto",
			'es-mx': "Cambio de Lugar",
			'de-de': "Platztausch",
			'it-it': "Avvicendamento",
			'pt-br': "Locais de Troca"
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
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "Its body, which is made of soft silk, hardens over time. When cracks appear, evolution is near.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869625,
				tcgplayer: 675826
			}
		},
		{
			type: "reverse",
			foil: "loveball",
			thirdParty: {
				cardmarket: 870158,
				tcgplayer: 676863
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870157,
				tcgplayer: 677003
			}
		},
	],
}

export default card
