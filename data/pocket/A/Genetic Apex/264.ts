import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Marowak ex",
		'fr-fr': "Ossatueur-ex",
		'es-es': "Marowak ex",
		'it-it': "Marowak-ex",
		'de-de': "Knogga-ex",
		'pt-br': "Marowak ex",
		'ko-kr': "텅구리 ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",

	dexId: [105],
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Cubone"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Bonemerang",
			'fr-fr': "Osmerang",
			'es-es': "Huesomerang",
			'it-it': "Ossomerang",
			'de-de': "Knochmerang",
			'pt-br': "Ossomerangue",
			'ko-kr': "뼈다귀부메랑"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 80 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			'it-it': "Lancia 2 volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 80 pontos de dano para cada cara.",
			'ko-kr': "동전을 2번 던져서 앞면이 나온 수 × 80데미지를 준다."
		},

		damage: "80×"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Star",
	boosters: ["mewtwo"]
}

export default card
