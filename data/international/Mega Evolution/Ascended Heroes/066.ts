import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vikavolt",
		'fr-fr': "Lucanon",
		'es-es': "Vikavolt",
		'es-mx': "Vikavolt",
		'de-de': "Donarion",
		'it-it': "Vikavolt",
		'pt-br': "Vikavolt"
	},

	evolveFrom: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'es-mx': "Charjabug",
		'de-de': "Akkup",
		'it-it': "Charjabug",
		'pt-br': "Charjabug",
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [738],
	hp: 160,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Volt Switch",
			'fr-fr': "Change-Éclair",
			'es-es': "Voltiocambio",
			'es-mx': "Cambiavoltaje",
			'de-de': "Voltwechsel",
			'it-it': "Invertivolt",
			'pt-br': "Troca Elétrica"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched {L} Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon {L} de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon {L} en Banca.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon {L} en Banca.",
			'de-de': "Tausche dieses Pokémon gegen 1 {L}-Pokémon auf deiner Bank aus.",
			'it-it': "Scambia questo Pokémon con un Pokémon {L} della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon {L} no Banco."
		},

		damage: 90
	}, {
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Sparking Strike",
			'fr-fr': "Frappe Étincelante",
			'es-es': "Golpe Chispeante",
			'es-mx': "Golpe Chispeante",
			'de-de': "Funkenschlag",
			'it-it': "Colpo Scintilla",
			'pt-br': "Golpe Cintilante"
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

	description: {
		'en-us': "When carrying a Charjabug, Vikavolt can receive electricity from it and then rapidly fire powerful electromagnetic beams from its large jaws.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869677,
			tcgplayer: 675878
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870242,
			tcgplayer: 676905
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870241,
			tcgplayer: 677045
		}
	},
],
}

export default card
