import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'de-de': "Gladiantri",
		'pt-br': "Pawniard",
		'ko-kr': "자망칼"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",

	dexId: [624],
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'de-de': "Durchbohren",
			'pt-br': "Perfurar",
			'ko-kr': "궤찌르기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "Pawniard will fearlessly challenge even powerful foes. In a pinch, it will cling to opponents and pierce them with the blades all over its body.",
		'fr-fr': "Il n'hésite pas à s'attaquer à ses ennemis,\nmême les plus féroces. Il s'accroche à eux et les\ntransperce en utilisant les lames sur son corps.",
		'es-es': "Desafía sin temor a enemigos poderosos.\nSi es necesario, se aferra al rival y le clava\nlas cuchillas que le recubren el cuerpo.",
		'it-it': "Sfida anche i nemici più potenti senza timore.\nSe necessario, si aggrappa all'avversario e lo\ntrafigge con le lame che ha sul corpo.",
		'de-de': "Furchtlos stellt es sich selbst starken Gegnern.\nIm Ernstfall hält es sich an ihnen fest und sticht\nmit den vielen Klingen an seinem Körper zu.",
		'pt-br': "Pawniard desafiará bravamente até oponentes mais\npoderosos. Num piscar de olhos, aproxima-se de sua\nvítima e a perfura com as lâminas que cobrem o seu corpo.",
		'ko-kr': "강한 상대에게도 겁먹지 않고 덤빈다.\n여차하면 상대에게 달라붙어서\n몸에 달린 칼날로 찌른다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
