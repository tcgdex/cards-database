import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
		es: "Mewtwo",
		it: "Mewtwo",
		de: "Mewtu",
		'pt-br': "Mewtwo",
		ko: "뮤츠"
	},

	illustrator: "Krgc",
	rarity: "One Star",
	category: "Pokemon",
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Power Blast",
			fr: "Violente Déflagration",
			es: "Estallido Vigoroso",
			it: "Forzacolpo",
			de: "Powerschuss",
			'pt-br': "Explosão Poderosa",
			ko: "파워블라스트"
		},

		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
		damage: 120,

		effect: {
			en: "Discard 2 {P} Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies {P} de ce Pokémon.",
			es: "Descarta 2 Energías {P} de este Pokémon.",
			it: "Rimuovi 2 Energie {P} da questo Pokémon.",
			de: "Lege 2 {P}-Energien von diesem Pokémon ab.",
			'pt-br': "Descarte 2 Energias {P} deste Pokémon.",
			ko: "이 포켓몬에서 {P}에너지를 2개 트래쉬한다."
		}
	}],

	hp: 120,

	description: {
		en: "It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.",
		fr: "Il est le fruit de nombreuses expériences\ngénétiques horribles et malsaines.",
		es: "Fue creado por un científico tras años de\nhorribles experimentos de ingeniería genética.",
		it: "Creato da uno scienziato dopo anni di\norribili esperimenti di ingegneria genetica.",
		de: "Dieses Pokémon ist das Resultat eines jahrelangen\nund skrupellosen Experimentes.",
		'pt-br': "Foi criado por cientistas através de anos\nde experimentos genéticos terríveis com\nmanipulação de DNA.",
		ko: "한 과학자가 몇 년에 걸쳐\n무서운 유전자의 연구를\n계속한 결과 탄생했다."
	},

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: []
}

export default card
