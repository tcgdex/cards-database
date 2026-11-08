import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zapdos ex",
		'fr-fr': "Électhor-ex",
		'es-es': "Zapdos ex",
		'it-it': "Zapdos-ex",
		'de-de': "Zapdos-ex",
		'pt-br': "Zapdos ex",
		'ko-kr': "썬더 ex"
	},

	illustrator: "PLANETA Saito",
	category: "Pokemon",

	dexId: [145],
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'de-de': "Pikser",
			'pt-br': "Bicada",
			'ko-kr': "쪼기"
		},

		damage: "20"
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'en-us': "Thundering Hurricane",
			'fr-fr': "Rafale d'Éclairs",
			'es-es': "Huracán Atronador",
			'it-it': "Tuonuragano",
			'de-de': "Donnernder Orkan",
			'pt-br': "Furacão Trovejante",
			'ko-kr': "허리케인 썬더"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'es-es': "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			'it-it': "Lancia 4 volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			'ko-kr': "동전을 4번 던져서 앞면이 나온 수 × 50데미지를 준다."
		},

		damage: "50×"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Star",
	boosters: ["pikachu"]
}

export default card
