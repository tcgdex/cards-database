import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Golurk",
		fr: "Golemastoc",
		es: "Golurk",
		it: "Golurk",
		de: "Golgantes",
		'pt-br': "Golurk",
		ko: "골루그"
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage1",

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
		es: "Golett",
		it: "Golett",
		pt: "Golett",
		de: "Golbit"
	},

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			en: "Double Lariat",
			fr: "Double Lasso",
			es: "Doble Lazo",
			it: "Doppio Lazzo",
			de: "Doppel-Lasso",
			'pt-br': "Laço Duplo",
			ko: "더블래리엇"
		},

		effect: {
			en: "Flip 2 coins. This attack does 100 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			it: "Lancia 2 volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			ko: "동전을 2번 던져서 앞면이 나온 수 × 100데미지를 준다."
		},

		damage: "100×"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 4,
	rarity: "Two Diamond",

	description: {
		en: "Artillery platforms built into the walls of ancient castles served as perches from which Golurk could fire energy beams.",
		fr: "Les murs des châteaux de jadis disposaient de créneaux,\npar lesquels les Golemastoc pouvaient tirer leurs rayons d'énergie.",
		es: "En los muros de antiguos castillos se hallan\nplataformas desde las que los Golurk podían\ndisparar sus rayos como si fueran cañones.",
		it: "Nelle mura degli antichi castelli si trovano\ndei basamenti, simili a quelli dei cannoni, dai\nquali i Golurk potevano sparare i loro raggi.",
		de: "In uralten Festungen finden sich heute noch\nSockel, die Golgantes beim Abfeuern seiner\nStrahlen wohl als Halt dienen sollten.",
		'pt-br': "Plataformas de artilharia construídas nas paredes\nde castelos antigos eram usadas por Golurk como\npoleiros, de onde disparavam seus feixes de energia.",
		ko: "고대인의 성벽에는\n골루그가 빔을 쏘기 위한\n포대와 같은 대좌가 있다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
