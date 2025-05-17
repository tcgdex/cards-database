import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Tauros",
		fr: "Tauros",
		es: "Tauros",
		it: "Tauros",
		de: "Tauros",
		'pt-br': "Tauros",
		ko: "켄타로스"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Horn Attack",
			fr: "Koud'Korne",
			es: "Cornada",
			it: "Incornata",
			de: "Hornattacke",
			'pt-br': "Ataque de Chifre",
			ko: "뿔찌르기"
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "When Tauros begins whipping itself with its tails, it's a warning that the Pokémon is about to charge with astounding speed.",
		fr: "Il faut prendre garde quand un Tauros fouette\nson corps avec ses queues. Cela signifie qu'il\ns'apprête à charger à une vitesse démentielle.",
		es: "Conviene tener cuidado si empieza a\nfustigarse con las colas, pues es señal\nde que va a cargar a máxima velocidad.",
		it: "Quando comincia a frustarsi con le sue stesse\ncode è pericoloso, in quanto è segno che sta\nper partire alla carica a tutta velocità.",
		de: "Peitscht es seinen Körper mit seinen Schweifen\naus, ist Vorsicht geboten, denn es steht kurz\ndavor, mit Karacho auf sein Ziel loszustürmen.",
		'pt-br': "Quando Tauros começa a chicotear a si mesmo\ncom suas caudas, é um aviso de que está prestes\na atacar com velocidade surpreendente.",
		ko: "꼬리로 자신의 몸을\n때리기 시작하면 위험하다.\n맹렬한 스피드로 덤벼든다."
	},

	boosters: ["charizard"]
}

export default card
