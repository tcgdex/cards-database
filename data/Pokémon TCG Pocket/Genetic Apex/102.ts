import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon",
		fr: "Voltali",
		es: "Jolteon",
		it: "Jolteon",
		de: "Blitza",
		'pt-br': "Jolteon",
		ko: "쥬피썬더"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Pin Missile",
			fr: "Dard-Nuée",
			es: "Pin Misil",
			it: "Missilspillo",
			de: "Nadelrakete",
			'pt-br': "Míssil de Espinhos",
			ko: "바늘미사일"
		},

		effect: {
			en: "Flip 4 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			it: "Lancia 4 volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			ko: "동전을 4번 던져서 앞면이 나온 수 × 40데미지를 준다."
		},

		damage: "40×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.",
		fr: "Il concentre la faible charge électrique générée par chacune\nde ses cellules pour projeter de puissants éclairs.",
		es: "Concentra la débil actividad eléctrica de\nsus células para lanzar dañinas descargas.",
		it: "Concentra la debole carica elettrica emessa\ndalle sue cellule per lanciare potenti scariche.",
		de: "Es sammelt die schwache elektrische\nEnergie, die von seinen Zellen ausgeht,\nund feuert starke Blitze ab.",
		'pt-br': "Ele concentra as cargas elétricas fracas emitidas\npor suas células e lança raios elétricos enfeitiçados.",
		ko: "세포가 내고 있는 약한\n전기를 하나로 모아서\n강력한 전기를 발산한다."
	},

	boosters: ["pikachu"]
}

export default card
