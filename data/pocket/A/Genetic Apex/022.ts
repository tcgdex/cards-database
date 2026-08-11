import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'es-es': "Exeggutor",
		'it-it': "Exeggutor",
		'de-de': "Kokowei",
		'pt-br': "Exeggutor",
		'ko-kr': "나시"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",

	dexId: [103],
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Exeggcute"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Stomp",
			'fr-fr': "Écrasement",
			'es-es': "Pisotón",
			'it-it': "Pestone",
			'de-de': "Stampfer",
			'pt-br': "Pisotear",
			'ko-kr': "짓밟기"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
		},

		damage: "30+"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		'en-us': "Each of Exeggutor's three heads is thinking different thoughts. The three don't seem to be very interested in one another.",
		'fr-fr': "Chacune de ses trois têtes pense de manière autonome.\nElles ne semblent s'intéresser qu'à elles-mêmes.",
		'es-es': "Cada una de las tres cabezas piensa\nde forma independiente y apenas\nmuestra interés por el resto.",
		'it-it': "Le sue tre teste ragionano in\nmodo indipendente. Sembra\nche ciascuna pensi solo a sé.",
		'de-de': "Jeder der drei Köpfe hat einen\neigenen Willen und scheint sich\nnur für sich selbst zu interessieren.",
		'pt-br': "Cada uma das três cabeças de Exeggutor está\npensando em coisas diferentes. Elas não parecem\nse interessar umas pelas outras.",
		'ko-kr': "3개의 머리는 서로 다른\n생각을 하고 있다. 자신 외에는\n별로 흥미가 없는 듯하다."
	},

	boosters: ["charizard"]
}

export default card
