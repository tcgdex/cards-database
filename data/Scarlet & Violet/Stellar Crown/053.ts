import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Vikavolt",
		fr: "Lucanon",
		es: "Vikavolt",
		it: "Vikavolt",
		pt: "Vikavolt",
		de: "Donarion"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Volt Switch",
			fr: "Change-Éclair",
			es: "Voltiocambio",
			it: "Invertivolt",
			pt: "Troca Elétrica",
			de: "Voltwechsel"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched {L} Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon {L} de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon {L} en Banca.",
			it: "Scambia questo Pokémon con un Pokémon {L} della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon {L} no Banco.",
			de: "Tausche dieses Pokémon gegen 1 {L}-Pokémon auf deiner Bank aus."
		},

		damage: 90
	}, {
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		name: {
			en: "Sparking Strike",
			fr: "Frappe Étincelante",
			es: "Golpe Chispeante",
			it: "Colpo Scintilla",
			pt: "Golpe Cintilante",
			de: "Funkenschlag"
		},

		damage: 240
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Shiburingaru",

	thirdParty: {
		cardmarket: 785907
	}
}

export default card
