import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Cascoon",
		fr: "Blindalys",
		es: "Cascoon",
		'es-mx': "Cascoon",
		de: "Panekon",
		it: "Cascoon",
		pt: "Cascoon"
	},

	illustrator: "Dsuke",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Trading Places",
			fr: "Permutation",
			es: "Cambio de Puesto",
			'es-mx': "Cambio de Lugar",
			de: "Platztausch",
			it: "Avvicendamento",
			pt: "Locais de Troca"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno nella tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		}
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675826,
		cardmarket: 869625
	}
}

export default card