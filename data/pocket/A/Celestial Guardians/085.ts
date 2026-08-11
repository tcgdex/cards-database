import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cosmog",
		'fr-fr': "Cosmog",
		'es-es': "Cosmog",
		'it-it': "Cosmog",
		'de-de': "Cosmog",
		'pt-br': "Cosmog",
		'ko-kr': "코스모그"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [789],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "Even though its helpless, gaseous body can be blown away by the slightest breeze, it doesn't seem to care.",
		'fr-fr': "Son corps est composé d'un gaz très instable.\nIl se fait emporter par la moindre brise, mais\nn'a pas l'air de s'en soucier pour autant.",
		'es-es': "Hasta la brisa más leve es capaz de arrastrar\nsu cuerpo, compuesto de una materia gaseosa\ninestable, pero no parece que eso le moleste.",
		'it-it': "Il suo corpo è formato da un gas instabile. Potrebbe volare via\nal minimo soffio di vento, ma non sembra preoccuparsene.",
		'de-de': "Da sein Körper aus Gas besteht, kann es schon\nvon einem leichten Luftzug weggeweht werden.\nAber das scheint ihm nichts auszumachen.",
		'pt-br': "Seu corpo indefeso e gasoso pode ser carregado por\nbrisas leves, mas Cosmog não parece se importar muito.",
		'ko-kr': "의지할 곳 없는 가스 상태의 몸은\n약한 바람에도 휩쓸리지만,\n전혀 신경 쓰지 않는 듯하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Teleport",
			'fr-fr': "Téléport",
			'es-es': "Teletransporte",
			'it-it': "Teletrasporto",
			'de-de': "Teleport",
			'pt-br': "Teleporte",
			'ko-kr': "순간이동"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'ko-kr': "이 포켓몬을 벤치 포켓몬과 교체한다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card