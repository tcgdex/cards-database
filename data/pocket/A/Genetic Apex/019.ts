import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
		'es-es': "Weepinbell",
		'it-it': "Weepinbell",
		'de-de': "Ultrigaria",
		'pt-br': "Weepinbell",
		'ko-kr': "우츠동"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",

	dexId: [70],
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Bellsprout"
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'de-de': "Rasierblatt",
			'pt-br': "Folha Navalha",
			'ko-kr': "잎날가르기"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		'en-us': "The leafy parts act as cutters for slashing foes. It spits a fluid that dissolves everything.",
		'fr-fr': "Ses membres en forme de feuilles permettent\nà Boustiflor de trancher ses adversaires.\nIl crache un fluide capable de tout dissoudre.",
		'es-es': "Las hojas que tiene actúan como cuchillas en combate.\nOtra de sus armas es el corrosivo fluido que expulsa.",
		'it-it': "Si serve delle foglie laterali come lame contro i nemici.\nIl fluido che secerne dalla bocca scioglie qualsiasi cosa.",
		'de-de': "Die Blätter werden eingesetzt, um Gegner\naufzuschlitzen. Dieses Pokémon spuckt eine\nFlüssigkeit, die alles auflöst.",
		'pt-br': "As partes folhosas funcionam como cortadores\npara dilacerar inimigos. Ele cospe um fluido\ncapaz de dissolver qualquer coisa.",
		'ko-kr': "잎사귀 부분은 칼날이 되어\n상대를 베어버린다. 입에서는\n무엇이든 녹이는 액체를 뿜어낸다."
	},

	boosters: ["charizard"]
}

export default card
