import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Magnemite",
		fr: "Magnéti",
		de: "Magnetilo",
		it: "Magnemite",
		es: "Magnemite",
		pt: "Magnemite"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Magnetic Switch",
			fr: "Échange Magnétique",
			de: "Magnettausch",
			it: "Scambio Magnetico",
			es: "Cambio Magnético",
			pt: "Chave Magnética"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		}
	}, {
		cost: ["Lightning"],

		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			de: "Elektroball",
			it: "Energisfera",
			es: "Bola Voltio",
			pt: "Bola Elétrica"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card