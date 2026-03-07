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

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	stage: "Stage2",
	dexId: [738],

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

	retreat: 1,
	regulationMark: "H",

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
		thirdParty: {
			cardmarket: 869677,
			tcgplayer: 675878
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870241,
			tcgplayer: 676905
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870242,
			tcgplayer: 677045
		}
	},
],
}

export default card