import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
		'es-es': "Froakie",
		'it-it': "Froakie",
		'de-de': "Froxy",
		'pt-br': "Froakie",
		'ko-kr': "개구마르"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [656],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "It secretes flexible bubbles from its chest and back.\nThe bubbles reduce the damage it would otherwise\ntake when attacked.",
		'fr-fr': "Sa poitrine et son dos sécrètent une mousse\nqui lui permet de subir moins de dégâts en\namortissant le choc des attaques.",
		'es-es': "Secreta burbujas tanto por la espalda como\npor el pecho. Gracias a la elasticidad de estas,\npuede parar ataques y reducir el daño recibido.",
		'it-it': "Dal petto e dalla schiena secerne una schiuma che gli\npermette di attutire i danni causati dagli attacchi nemici.",
		'de-de': "Es stößt aus Brust und Rücken elastische Blasen aus,\nmit denen es gegnerische Angriffe abfängt und so\nden erlittenen Schaden verringert.",
		'pt-br': "Liberam bolhas flexíveis do peito e das costas.\nAs bolhas reduzem os danos que sofreriam\nao serem atacados.",
		'ko-kr': "가슴과 등에서 거품을 내뿜는다.\n탄력 있는 거품으로 공격을\n막아내고 데미지를 줄인다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'es-es': "Vuelta",
			'it-it': "Tonfo",
			'de-de': "Plumps",
			'pt-br': "Baque",
			'ko-kr': "돌아다니며 뛰기"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol7"]
}

export default card