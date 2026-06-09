import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Gliscor",
		fr: "Scorvol",
		es: "Gliscor",
		it: "Gliscor",
		de: "Skorgro",
		'pt-br': "Gliscor",
		ko: "글라이온"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [472],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gligar"
	},

	description: {
		en: "It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!",
		fr: "Il guette sa proie, pendu à une branche la tête\nen bas, et s'en saisit à la première occasion.",
		es: "Espera a sus presas colgado de una rama bocabajo.\nCuando llega su oportunidad, se lanza en picado.",
		it: "Sta appeso ai rami con la testa in giù. Alla prima\noccasione, si butta a capofitto sulla preda.",
		de: "Es hängt kopfüber von einem Ast und beobachtet\nseine Beute. Bei Gelegenheit stürzt es sich auf sie.",
		'pt-br': "Observa as presas enquanto se pendura de cabeça\npara baixo nos galhos. Quando a chance surge, ele ataca!",
		ko: "꼬리로 나뭇가지에 매달려\n먹이를 관찰한다. 틈을\n봐서 상공에서 덮친다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Acrobatics",
			fr: "Acrobatie",
			es: "Acróbata",
			it: "Acrobazia",
			de: "Akrobatik",
			'pt-br': "Acrobático",
			ko: "애크러뱃"
		},

		damage: "20+",
		cost: ["Fighting"],

		effect: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
			it: "Lancia 2 volte una moneta. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano a mais para cada cara.",
			ko: "동전을 2번 던져서 앞면이 나온 수 × 20데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
