import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'de-de': "Felilou",
		'pt-br': "Purrloin",
		'ko-kr': "쌔비냥"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	dexId: [509],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "It steals things from people just to amuse itself with their frustration. A rivalry exists between this Pokémon and Nickit.",
		'fr-fr': "Il vole les biens des personnes rien que pour voir leur\nvisage désemparé. Son plus grand rival est Goupilou.",
		'es-es': "Sustrae las pertenencias de las personas solo para\nverlas pasar apuros. Es un rival encarnizado de Nickit.",
		'it-it': "Ruba le cose alle persone per vederle\nin difficoltà. Nickit è il suo rivale.",
		'de-de': "Es bestiehlt liebend gerne Leute, um sich an ihrer\nFrustration zu erfreuen. Mit Kleptifux verbindet\nes eine tiefe Rivalität.",
		'pt-br': "Furta as pessoas só para se divertir com a frustração delas.\nExiste uma rivalidade entre este Pokémon e Nickit.",
		'ko-kr': "곤란해하는 모습을 보기 위해\n사람의 물건을 훔친다.\n훔처우와는 라이벌 관계다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'de-de': "Kratzer",
			'pt-br': "Arranhão",
			'ko-kr': "할퀴기"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
