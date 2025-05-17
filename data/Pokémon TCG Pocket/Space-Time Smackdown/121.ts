import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

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

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		en: "It skulks in caves, and when prey or an enemy passes by, it leaps out and chomps them. The force of its attack sometimes chips its teeth.",
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
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			de: "Nagen",
			'pt-br': "Roída",
			ko: "갉기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
