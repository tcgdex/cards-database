import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'it-it': "Cottonee",
		'de-de': "Waumboll",
		'pt-br': "Cottonee",
		'ko-kr': "소미안"
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",

	dexId: [546],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Attach",
			'fr-fr': "Accrochage",
			'es-es': "Pegarse",
			'it-it': "Appiccicoso",
			'de-de': "Festkleben",
			'pt-br': "Conectar",
			'ko-kr': "들러붙기"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "It shoots cotton from its body to protect itself. If it gets caught up in hurricane-strength winds, it can get sent to the other side of the Earth.",
		'fr-fr': "Il sème du coton pour se protéger.\nIl lui arrive d'être emporté par une\ntempête à l'autre bout du monde.",
		'es-es': "Lanza bolas de algodón para defenderse.\nA veces, la fuerza de un tifón llega a\narrastrarlo hasta el otro extremo del mundo.",
		'it-it': "Si difende creando una nuvola di cotone. A volte viene\ntrasportato fino all'altro capo del mondo dai tifoni.",
		'de-de': "Sie schützen sich, indem sie Watte verstreuen.\nManche werden vom Wind bis ans andere Ende\nder Welt getragen.",
		'pt-br': "Dispara algodão do seu corpo para se proteger.\nSe este Pokémon for carregado por um furacão,\npode ir parar do outro lado da Terra.",
		'ko-kr': "솜을 날려 몸을 지킨다.\n태풍의 바람에 휩쓸려\n지구 반대편까지 갈 때도 있다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
