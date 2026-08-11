import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
		'es-es': "Jolteon",
		'it-it': "Jolteon",
		'de-de': "Blitza",
		'pt-br': "Jolteon",
		'ko-kr': "쥬피썬더"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",

	dexId: [135],
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Eevee"
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Pin Missile",
			'fr-fr': "Dard-Nuée",
			'es-es': "Pin Misil",
			'it-it': "Missilspillo",
			'de-de': "Nadelrakete",
			'pt-br': "Míssil de Espinhos",
			'ko-kr': "바늘미사일"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'es-es': "Lanza 4 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'it-it': "Lancia 4 volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'ko-kr': "동전을 4번 던져서 앞면이 나온 수 × 40데미지를 준다."
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
		'en-us': "It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.",
		'fr-fr': "Il concentre la faible charge électrique générée par chacune\nde ses cellules pour projeter de puissants éclairs.",
		'es-es': "Concentra la débil actividad eléctrica de\nsus células para lanzar dañinas descargas.",
		'it-it': "Concentra la debole carica elettrica emessa\ndalle sue cellule per lanciare potenti scariche.",
		'de-de': "Es sammelt die schwache elektrische\nEnergie, die von seinen Zellen ausgeht,\nund feuert starke Blitze ab.",
		'pt-br': "Ele concentra as cargas elétricas fracas emitidas\npor suas células e lança raios elétricos enfeitiçados.",
		'ko-kr': "세포가 내고 있는 약한\n전기를 하나로 모아서\n강력한 전기를 발산한다."
	},

	boosters: ["pikachu"]
}

export default card
