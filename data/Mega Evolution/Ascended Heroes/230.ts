import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Vikavolt",
		fr: "Lucanon",
		es: "Vikavolt",
		'es-mx': "Vikavolt",
		de: "Donarion",
		it: "Vikavolt",
		pt: "Vikavolt"
	},

	evolveFrom: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		'es-mx': "Charjabug",
		de: "Akkup",
		it: "Charjabug",
		pt: "Charjabug",
	},

	illustrator: "Tonji Matsuno",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [738],
	hp: 160,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Volt Switch",
			fr: "Change-Éclair",
			es: "Voltiocambio",
			'es-mx': "Cambiavoltaje",
			de: "Voltwechsel",
			it: "Invertivolt",
			pt: "Troca Elétrica"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched {L} Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon {L} de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon {L} en Banca.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon {L} en Banca.",
			de: "Tausche dieses Pokémon gegen 1 {L}-Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con un Pokémon {L} della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon {L} no Banco."
		},

		damage: 90
	}, {
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		name: {
			en: "Sparking Strike",
			fr: "Frappe Étincelante",
			es: "Golpe Chispeante",
			'es-mx': "Golpe Chispeante",
			de: "Funkenschlag",
			it: "Colpo Scintilla",
			pt: "Golpe Cintilante"
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
		en: "When carrying a Charjabug, Vikavolt can receive electricity from it and then rapidly fire powerful electromagnetic beams from its large jaws.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869841,
				tcgplayer: 676042
			}
		}
	],
}

export default card
