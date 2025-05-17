import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Froakie",
		fr: "Grenousse",
		es: "Froakie",
		it: "Froakie",
		de: "Froxy",
		'pt-br': "Froakie",
		ko: "개구마르"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flop",
			fr: "Flop",
			es: "Vuelta",
			it: "Tonfo",
			de: "Plumps",
			'pt-br': "Baque",
			ko: "돌아다니며 뛰기"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked.",
		fr: "Sa poitrine et son dos sécrètent une mousse\nqui lui permet de subir moins de dégâts en\namortissant le choc des attaques.",
		es: "Secreta burbujas tanto por la espalda como\npor el pecho. Gracias a la elasticidad de estas,\npuede parar ataques y reducir el daño recibido.",
		it: "Dal petto e dalla schiena secerne una schiuma che gli\npermette di attutire i danni causati dagli attacchi nemici.",
		de: "Es stößt aus Brust und Rücken elastische Blasen aus,\nmit denen es gegnerische Angriffe abfängt und so\nden erlittenen Schaden verringert.",
		'pt-br': "Liberam bolhas flexíveis do peito e das costas.\nAs bolhas reduzem os danos que sofreriam\nao serem atacados.",
		ko: "가슴과 등에서 거품을 내뿜는다.\n탄력 있는 거품으로 공격을\n막아내고 데미지를 줄인다."
	},

	boosters: ["charizard"]
}

export default card
