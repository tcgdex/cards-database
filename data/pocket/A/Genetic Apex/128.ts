import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mewtwo",
		'fr-fr': "Mewtwo",
		'es-es': "Mewtwo",
		'it-it': "Mewtwo",
		'de-de': "Mewtu",
		'pt-br': "Mewtwo",
		'ko-kr': "뮤츠"
	},

	illustrator: "kawayoo",
	category: "Pokemon",

	dexId: [150],
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Power Blast",
			'fr-fr': "Violente Déflagration",
			'es-es': "Estallido Vigoroso",
			'it-it': "Forzacolpo",
			'de-de': "Powerschuss",
			'pt-br': "Explosão Poderosa",
			'ko-kr': "파워블라스트"
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

		damage: "120"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		'en-us': "It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.",
		'fr-fr': "Il est le fruit de nombreuses expériences\ngénétiques horribles et malsaines.",
		'es-es': "Fue creado por un científico tras años de\nhorribles experimentos de ingeniería genética.",
		'it-it': "Creato da uno scienziato dopo anni di\norribili esperimenti di ingegneria genetica.",
		'de-de': "Dieses Pokémon ist das Resultat eines jahrelangen\nund skrupellosen Experimentes.",
		'pt-br': "Foi criado por cientistas através de anos\nde experimentos genéticos terríveis com\nmanipulação de DNA.",
		'ko-kr': "한 과학자가 몇 년에 걸쳐\n무서운 유전자의 연구를\n계속한 결과 탄생했다."
	},

	boosters: ["mewtwo"]
}

export default card
