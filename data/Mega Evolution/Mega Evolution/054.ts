import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Abra",
		fr: "Abra",
		de: "Abra",
		it: "Abra",
		es: "Abra",
		pt: "Abra",
		'es-mx': "Abra"
	},

	illustrator: "Orca",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Teleportation Attack",
			fr: "Attaque de Téléportation",
			de: "Teleportationsattacke",
			it: "Attacco Teletrasporto",
			es: "Ataque Teleportador",
			pt: "Golpe de Teletransporte",
			'es-mx': "Ataque Teletransportador"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno nella tua panchina.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654393
	}
}

export default card