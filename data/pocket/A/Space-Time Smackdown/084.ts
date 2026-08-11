import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gliscor",
		'fr-fr': "Scorvol",
		'es-es': "Gliscor",
		'it-it': "Gliscor",
		'de-de': "Skorgro",
		'pt-br': "Gliscor",
		'ko-kr': "글라이온"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [472],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Gligar"
	},

	description: {
		'en-us': "It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!",
		'fr-fr': "Il guette sa proie, pendu à une branche la tête\nen bas, et s'en saisit à la première occasion.",
		'es-es': "Espera a sus presas colgado de una rama bocabajo.\nCuando llega su oportunidad, se lanza en picado.",
		'it-it': "Sta appeso ai rami con la testa in giù. Alla prima\noccasione, si butta a capofitto sulla preda.",
		'de-de': "Es hängt kopfüber von einem Ast und beobachtet\nseine Beute. Bei Gelegenheit stürzt es sich auf sie.",
		'pt-br': "Observa as presas enquanto se pendura de cabeça\npara baixo nos galhos. Quando a chance surge, ele ataca!",
		'ko-kr': "꼬리로 나뭇가지에 매달려\n먹이를 관찰한다. 틈을\n봐서 상공에서 덮친다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Acrobatics",
			'fr-fr': "Acrobatie",
			'es-es': "Acróbata",
			'it-it': "Acrobazia",
			'de-de': "Akrobatik",
			'pt-br': "Acrobático",
			'ko-kr': "애크러뱃"
		},

		damage: "20+",
		cost: ["Fighting"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
			'it-it': "Lancia 2 volte una moneta. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano a mais para cada cara.",
			'ko-kr': "동전을 2번 던져서 앞면이 나온 수 × 20데미지를 추가한다."
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
