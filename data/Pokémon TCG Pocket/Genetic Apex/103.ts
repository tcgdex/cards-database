import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos",
		fr: "Électhor",
		es: "Zapdos",
		it: "Zapdos",
		de: "Zapdos",
		'pt-br': "Zapdos",
		ko: "썬더"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Raging Thunder",
			fr: "Tonnerre Déchaîné",
			es: "Trueno Rabioso",
			it: "Rombotuono",
			de: "Tosender Donner",
			'pt-br': "Trovão Devastador",
			ko: "낙뢰"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your Benched Pokémon.",
			fr: "Cette attaque inflige aussi 30 dégâts à un de vos Pokémon de Banc.",
			es: "Este ataque también hace 30 puntos de daño a 1 de tus Pokémon en Banca.",
			it: "Questo attacco infligge anche 30 danni a uno dei tuoi Pokémon in panchina.",
			de: "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 30 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos seus Pokémon no Banco.",
			ko: "자신의 벤치 포켓몬 1마리에게도 30데미지를 준다."
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.",
		fr: "On dit que ce Pokémon capable de contrôler la foudre\ninstalle son nid au creux des nuages d'orage noirs.",
		es: "Posee el poder de controlar la electricidad\na su antojo. Según la creencia popular, anida\noculto en oscuros nubarrones de tormenta.",
		it: "È in grado di controllare l'elettricità a\nsuo piacimento. Secondo le leggende,\nfa il nido fra nere nubi temporalesche.",
		de: "Zapdos kann Elektrizität manipulieren.\nÜberlieferungen nach soll sein Nest inmitten\npechschwarzer Gewitterwolken liegen.",
		'pt-br': "Este Pokémon tem controle absoluto da eletricidade.\nCertas lendas afirmam que Zapdos faz seu ninho nas\nprofundezas escuras de nuvens de tempestades.",
		ko: "전기를 자유로이 조종한다.\n새까만 번개 구름 안에\n거처가 있다고 전해지고 있다."
	}
}

export default card
