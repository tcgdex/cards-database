import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Swablu",
		fr: "Tylton",
		de: "Wablu",
		es: "Swablu",
		it: "Swablu",
		pt: "Swablu",
		'es-mx': "Swablu"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Run Around",
			fr: "Course Effrénée",
			de: "Herumrennen",
			es: "Correr Alrededor",
			it: "Correre Intorno",
			pt: "Zoar",
			'es-mx': "Correteo"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno nella tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Peck",
			fr: "Picpic",
			de: "Pikser",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			'es-mx': "Picotazo"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	thirdParty: {
		tcgplayer: 728046,
		cardmarket: 918909
	}
}

export default card