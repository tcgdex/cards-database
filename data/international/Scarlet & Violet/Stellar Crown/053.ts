import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [738],
	set: Set,

	name: {
		'en-us': "Vikavolt",
		'fr-fr': "Lucanon",
		'es-es': "Vikavolt",
		'it-it': "Vikavolt",
		'pt-br': "Vikavolt",
		'de-de': "Donarion"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'it-it': "Charjabug",
		'pt-br': "Charjabug",
		'de-de': "Akkup"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Volt Switch",
			'fr-fr': "Change-Éclair",
			'es-es': "Voltiocambio",
			'it-it': "Invertivolt",
			'pt-br': "Troca Elétrica",
			'de-de': "Voltwechsel"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched {L} Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon {L} de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon {L} en Banca.",
			'it-it': "Scambia questo Pokémon con un Pokémon {L} della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon {L} no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 {L}-Pokémon auf deiner Bank aus."
		},

		damage: 90
	}, {
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Sparking Strike",
			'fr-fr': "Frappe Étincelante",
			'es-es': "Golpe Chispeante",
			'it-it': "Colpo Scintilla",
			'pt-br': "Golpe Cintilante",
			'de-de': "Funkenschlag"
		},

		damage: 240
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785907,
				tcgplayer: 567279
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785907,
				tcgplayer: 567279
			}
		},
	],

	illustrator: "Shiburingaru",

}

export default card
