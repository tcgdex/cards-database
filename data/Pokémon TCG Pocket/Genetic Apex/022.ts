import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		es: "Exeggutor",
		it: "Exeggutor",
		de: "Kokowei",
		'pt-br': "Exeggutor",
		ko: "나시"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		en: "Exeggcute"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Stomp",
			fr: "Écrasement",
			es: "Pisotón",
			it: "Pestone",
			de: "Stampfer",
			'pt-br': "Pisotear",
			ko: "짓밟기"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			ko: "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
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
		en: "Each of Exeggutor's three heads is thinking different thoughts. The three don't seem to be very interested in one another.",
		fr: "Chacune de ses trois têtes pense de manière autonome.\nElles ne semblent s'intéresser qu'à elles-mêmes.",
		es: "Cada una de las tres cabezas piensa\nde forma independiente y apenas\nmuestra interés por el resto.",
		it: "Le sue tre teste ragionano in\nmodo indipendente. Sembra\nche ciascuna pensi solo a sé.",
		de: "Jeder der drei Köpfe hat einen\neigenen Willen und scheint sich\nnur für sich selbst zu interessieren.",
		'pt-br': "Cada uma das três cabeças de Exeggutor está\npensando em coisas diferentes. Elas não parecem\nse interessar umas pelas outras.",
		ko: "3개의 머리는 서로 다른\n생각을 하고 있다. 자신 외에는\n별로 흥미가 없는 듯하다."
	},

	boosters: ["charizard"]
}

export default card
