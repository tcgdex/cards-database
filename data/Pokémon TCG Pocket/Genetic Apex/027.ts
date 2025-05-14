import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Cottonee",
		fr: "Doudouvet",
		es: "Cottonee",
		it: "Cottonee",
		de: "Waumboll",
		'pt-br': "Cottonee",
		ko: "소미안"
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Attach",
			fr: "Accrochage",
			es: "Pegarse",
			it: "Appiccicoso",
			de: "Festkleben",
			'pt-br': "Conectar",
			ko: "들러붙기"
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
		en: "It shoots cotton from its body to protect itself. If it gets caught up in hurricane-strength winds, it can get sent to the other side of the Earth.",
		fr: "Il sème du coton pour se protéger.\nIl lui arrive d'être emporté par une\ntempête à l'autre bout du monde.",
		es: "Lanza bolas de algodón para defenderse.\nA veces, la fuerza de un tifón llega a\narrastrarlo hasta el otro extremo del mundo.",
		it: "Si difende creando una nuvola di cotone. A volte viene\ntrasportato fino all'altro capo del mondo dai tifoni.",
		de: "Sie schützen sich, indem sie Watte verstreuen.\nManche werden vom Wind bis ans andere Ende\nder Welt getragen.",
		'pt-br': "Dispara algodão do seu corpo para se proteger.\nSe este Pokémon for carregado por um furacão,\npode ir parar do outro lado da Terra.",
		ko: "솜을 날려 몸을 지킨다.\n태풍의 바람에 휩쓸려\n지구 반대편까지 갈 때도 있다."
	}
}

export default card
