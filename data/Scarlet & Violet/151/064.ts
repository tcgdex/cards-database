import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [64],
	set: Set,

	name: {
		fr: "Kadabra",
		en: "Kadabra",
		es: "Kadabra",
		it: "Kadabra",
		pt: "Kadabra",
		de: "Kadabra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Attaque de Téléportation",
			en: "Teleportation Attack",
			es: "Ataque Teleportador",
			it: "Attacco Teletrasporto",
			pt: "Golpe de Teletransporte",
			de: "Teleportationsattacke"
		},

		effect: {
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card