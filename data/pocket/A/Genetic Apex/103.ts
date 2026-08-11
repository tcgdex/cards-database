import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zapdos",
		'fr-fr': "Électhor",
		'es-es': "Zapdos",
		'it-it': "Zapdos",
		'de-de': "Zapdos",
		'pt-br': "Zapdos",
		'ko-kr': "썬더"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",

	dexId: [145],
	hp: 100,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Raging Thunder",
			'fr-fr': "Tonnerre Déchaîné",
			'es-es': "Trueno Rabioso",
			'it-it': "Rombotuono",
			'de-de': "Tosender Donner",
			'pt-br': "Trovão Devastador",
			'ko-kr': "낙뢰"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à un de vos Pokémon de Banc.",
			'es-es': "Este ataque también hace 30 puntos de daño a 1 de tus Pokémon en Banca.",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei tuoi Pokémon in panchina.",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 30 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos seus Pokémon no Banco.",
			'ko-kr': "자신의 벤치 포켓몬 1마리에게도 30데미지를 준다."
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
		'en-us': "This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.",
		'fr-fr': "On dit que ce Pokémon capable de contrôler la foudre\ninstalle son nid au creux des nuages d'orage noirs.",
		'es-es': "Posee el poder de controlar la electricidad\na su antojo. Según la creencia popular, anida\noculto en oscuros nubarrones de tormenta.",
		'it-it': "È in grado di controllare l'elettricità a\nsuo piacimento. Secondo le leggende,\nfa il nido fra nere nubi temporalesche.",
		'de-de': "Zapdos kann Elektrizität manipulieren.\nÜberlieferungen nach soll sein Nest inmitten\npechschwarzer Gewitterwolken liegen.",
		'pt-br': "Este Pokémon tem controle absoluto da eletricidade.\nCertas lendas afirmam que Zapdos faz seu ninho nas\nprofundezas escuras de nuvens de tempestades.",
		'ko-kr': "전기를 자유로이 조종한다.\n새까만 번개 구름 안에\n거처가 있다고 전해지고 있다."
	},

	boosters: ["pikachu"]
}

export default card
