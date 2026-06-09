import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Golem",
		fr: "Grolem",
		es: "Golem",
		it: "Golem",
		de: "Geowaz",
		'pt-br': "Golem",
		ko: "딱구리"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",

	dexId: [76],
	hp: 160,
	types: ["Fighting"],
	stage: "Stage2",

	evolveFrom: {
		en: "Graveler"
	},

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Double-Edge",
			fr: "Damoclès",
			es: "Doble Filo",
			it: "Sdoppiatore",
			de: "Risikotackle",
			'pt-br': "Faca de Dois Gumes",
			ko: "이판사판태클"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			ko: "이 포켓몬에게도 50데미지를 준다."
		},

		damage: "150"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,
	rarity: "Three Diamond",

	description: {
		en: "When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.",
		fr: "Lorsqu'il arrive à un âge avancé, il arrête de muer.\nUn Grolem ayant vécu très longtemps est recouvert\nde mousse verte.",
		es: "A medida que envejece, pierde la facultad de\nmudar la piel. Se han observado ejemplares de\nedad avanzada totalmente cubiertos de musgo.",
		it: "Quando invecchia, non fa più la muta.\nIl guscio dei Golem molto anziani si\nricopre di muschio tingendosi di verde.",
		de: "Im Alter hört es auf, sich zu häuten.\nDer Panzer betagter Geowaz ist mit\ndichtem, grünem Moos bewachsen.",
		'pt-br': "Ao envelhecer, Golem param de mudar de\ncarapaça. Os que viveram muitos e muitos\nanos têm carapaças cobertas de musgo verde.",
		ko: "나이가 들면 탈피를 하지 않는다.\n긴 세월을 산 딱구리의 껍질은\n이끼가 끼어 초록색이다."
	},

	boosters: ["pikachu"]
}

export default card
