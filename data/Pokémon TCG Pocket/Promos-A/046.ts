import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Gible",
		fr: "Griknot",
		es: "Gible",
		it: "Gible",
		de: "Kaumalat",
		'pt-br': "Gible",
		ko: "딥상어동"
	},

	illustrator: "Uninori",
	rarity: "None",
	category: "Pokemon",

	dexId: [443],
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It skulks in caves, and when prey or an enemy\npasses by, it leaps out and chomps them.\nThe force of its attack sometimes chips its teeth.",
		fr: "Il attend qu'une proie passe pour bondir hors de son trou\net la croquer. Dans son élan, il se casse parfois les dents.",
		es: "Permanece oculto en cuevas y, cuando pasa una\npresa, se abalanza sobre ella y la muerde con\ntanta fuerza que hasta se le rompen los dientes.",
		it: "Aspetta nemici e prede in agguato nella sua\ntana. Quando gli arrivano a tiro, li addenta\ncon tale forza che a volte si spezza i denti.",
		de: "Es verbirgt sich in kleinen Höhlen, aus denen es\nherausspringt und vorbeilaufende Gegner oder\nBeute beißt. Manchmal bricht dabei ein Zahn ab.",
		'pt-br': "Esconde-se em cavernas e quando presas ou inimigos\npassam, sai e os devora. A força do seu ataque às vezes\nquebra seus dentes.",
		ko: "구멍에 숨어서 먹이나 적이\n지나가면 뛰쳐나가 문다.\n기세가 대단해 이가 빠질 때도 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			de: "Tackle",
			'pt-br': "Investida",
			ko: "몸통박치기"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol5"]
}

export default card
