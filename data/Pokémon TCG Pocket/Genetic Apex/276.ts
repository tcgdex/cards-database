import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos ex",
		fr: "Électhor-ex",
		es: "Zapdos ex",
		it: "Zapdos-ex",
		de: "Zapdos-ex",
		'pt-br': "Zapdos ex",
		ko: "썬더 ex"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			de: "Pikser",
			'pt-br': "Bicada",
			ko: "쪼기"
		},

		damage: "20"
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Thundering Hurricane",
			fr: "Rafale d'Éclairs",
			es: "Huracán Atronador",
			it: "Tuonuragano",
			de: "Donnernder Orkan",
			'pt-br': "Furacão Trovejante",
			ko: "허리케인 썬더"
		},

		effect: {
			en: "Flip 4 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			it: "Lancia 4 volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			ko: "동전을 4번 던져서 앞면이 나온 수 × 50데미지를 준다."
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
