import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor ex",
		fr: "Noadkoko-ex",
		es: "Exeggutor ex",
		it: "Exeggutor-ex",
		de: "Kokowei-ex",
		'pt-br': "Exeggutor ex",
		ko: "나시 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		en: "Exeggcute"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tropical Swing",
			fr: "Coup Tropical",
			es: "Golpe Tropical",
			it: "Tropicolpo",
			de: "Tropenschwung",
			'pt-br': "Balanço Tropical",
			ko: "트로피컬스윙"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts de plus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			ko: "동전을 1번 던져서 앞면이 나오면 40데미지를 추가한다."
		},

		damage: "40+"
	}],

	suffix: "EX",

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Four Diamond",
	boosters: ["charizard"]
}

export default card
