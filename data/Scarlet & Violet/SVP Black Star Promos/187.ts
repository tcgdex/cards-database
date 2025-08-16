import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [469],
	set: Set,

	name: {
		en: "Yanmega",
		fr: "Yanmega",
		de: "Yanmega",
		es: "Yanmega",
		it: "Yanmega",
		pt: "Yanmega"
	},

	illustrator: "Dsuke",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Gyro Shockwave",
			fr: "Onde de Choc Gyro",
			de: "Gyro-Schockwelle",
			es: "Onda Giratoria Explosiva",
			it: "Vortexonda d'Urto",
			pt: "Onda de Choques Giroscópica"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card