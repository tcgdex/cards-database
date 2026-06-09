import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo ex",
		fr: "Mewtwo-ex",
		es: "Mewtwo ex",
		it: "Mewtwo-ex",
		de: "Mewtu-ex",
		'pt-br': "Mewtwo ex",
		ko: "뮤츠 ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",

	dexId: [150],
	hp: 150,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
			es: "Esfera Psíquica",
			it: "Psicosfera",
			de: "Psychosphäre",
			'pt-br': "Esfera Psíquica",
			ko: "염동탄"
		},

		damage: "50"
	}, {
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psydrive",
			fr: "Psykoforce",
			es: "Guía Psi",
			it: "Psicomotore",
			de: "Psycho-Antrieb",
			'pt-br': "Controle Psíquico",
			ko: "사이코 드라이브"
		},

		effect: {
			en: "Discard 2 {P} Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies {P} de ce Pokémon.",
			es: "Descarta 2 Energías {P} de este Pokémon.",
			it: "Rimuovi 2 Energie {P} da questo Pokémon.",
			de: "Lege 2 {P}-Energien von diesem Pokémon ab.",
			'pt-br': "Descarte 2 Energias {P} deste Pokémon.",
			ko: "이 포켓몬에서 {P}에너지를 2개 트래쉬한다."
		},

		damage: "150"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Crown",
	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
