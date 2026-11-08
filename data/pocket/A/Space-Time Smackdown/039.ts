import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Floatzel",
		'fr-fr': "Mustéflott",
		'es-es': "Floatzel",
		'it-it': "Floatzel",
		'de-de': "Bojelin",
		'pt-br': "Floatzel",
		'ko-kr': "플로젤"
	},

	illustrator: "Kanako Eo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [419],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Buizel"
	},

	description: {
		'en-us': "With its flotation sac inflated, it can carry people on its back. It deflates the sac before it dives.",
		'fr-fr': "Il gonfle sa bouée pour permettre aux gens de\nmonter sur son dos et il la dégonfle pour plonger.",
		'es-es': "Con la vejiga natatoria inflada, puede llevar a personas\nsobre su espalda. Antes de bucear, la desinfla.",
		'it-it': "Col galleggiante gonfio, può trasportare delle\npersone sul dorso. Per immergersi lo sgonfia.",
		'de-de': "Mit gefüllter Schwimmblase kann es Menschen\nauf seinem Rücken tragen. Lässt es Luft aus ihr\nheraus, taucht es unter.",
		'pt-br': "Com sua bolsa de flutuação inflada, pode transportar\npessoas nas costas. Esvazia a bolsa antes de mergulhar.",
		'ko-kr': "부낭을 부풀리면 사람을\n등에 태울 수 있다.\n부낭을 오그라들게 하여 잠수한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Jet Screw",
			'fr-fr': "Vis Express",
			'es-es': "Chorro Tirabuzón",
			'it-it': "Vite Jet",
			'de-de': "Düsenschraube",
			'pt-br': "Jato Parafuso",
			'ko-kr': "제트 스크루"
		},

		damage: "30+",
		cost: ["Water"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
