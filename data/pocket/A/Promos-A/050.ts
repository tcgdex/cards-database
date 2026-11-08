import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mewtwo ex",
		'fr-fr': "Mewtwo-ex",
		'es-es': "Mewtwo ex",
		'it-it': "Mewtwo-ex",
		'de-de': "Mewtu-ex",
		'pt-br': "Mewtwo ex",
		'ko-kr': "뮤츠 ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "None",
	category: "Pokemon",

	dexId: [150],
	hp: 150,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Psychic Sphere",
			'fr-fr': "Sphère Psy",
			'es-es': "Esfera Psíquica",
			'it-it': "Psicosfera",
			'de-de': "Psychosphäre",
			'pt-br': "Esfera Psíquica",
			'ko-kr': "염동탄"
		},

		damage: 50
	}, {
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Psydrive",
			'fr-fr': "Psykoforce",
			'es-es': "Guía Psi",
			'it-it': "Psicomotore",
			'de-de': "Psycho-Antrieb",
			'pt-br': "Controle Psíquico",
			'ko-kr': "사이코 드라이브"
		},

		effect: {
			'en-us': "Discard 2 {P} Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies {P} de ce Pokémon.",
			'es-es': "Descarta 2 Energías {P} de este Pokémon.",
			'it-it': "Rimuovi 2 Energie {P} da questo Pokémon.",
			'de-de': "Lege 2 {P}-Energien von diesem Pokémon ab.",
			'pt-br': "Descarte 2 Energias {P} deste Pokémon.",
			'ko-kr': "이 포켓몬에서 {P}에너지를 2개 트래쉬한다."
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: []
}

export default card
