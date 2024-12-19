import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Tirtouga",
		fr: "Carapagos",
		es: "Tirtouga",
		it: "Tirtouga",
		pt: "Tirtouga",
		de: "Galapaflos"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Splashing Turn",
			fr: "Tour Éclaboussant",
			es: "Giro Chapoteante",
			it: "Girata Inondante",
			pt: "Giro Borrifante",
			de: "Platschende Drehung"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	}
}

export default card
