import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
		'es-es': "Tauros",
		'it-it': "Tauros",
		'de-de': "Tauros",
		'pt-br': "Tauros",
		'ko-kr': "켄타로스"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [128],
	hp: 100,
	types: ["Colorless"],

	description: {
		'en-us': "When Tauros begins whipping itself with its tails, it's a warning that the Pokémon is about to charge with astounding speed.",
		'fr-fr': "Il faut prendre garde quand un Tauros fouette\nson corps avec ses queues. Cela signifie qu'il\ns'apprête à charger à une vitesse démentielle.",
		'es-es': "Conviene tener cuidado si empieza a\nfustigarse con las colas, pues es señal\nde que va a cargar a máxima velocidad.",
		'it-it': "Quando comincia a frustarsi con le sue stesse\ncode è pericoloso, in quanto è segno che sta\nper partire alla carica a tutta velocità.",
		'de-de': "Peitscht es seinen Körper mit seinen Schweifen\naus, ist Vorsicht geboten, denn es steht kurz\ndavor, mit Karacho auf sein Ziel loszustürmen.",
		'pt-br': "Quando Tauros começa a chicotear a si mesmo\ncom suas caudas, é um aviso de que está prestes\na atacar com velocidade surpreendente.",
		'ko-kr': "꼬리로 자신의 몸을\n때리기 시작하면 위험하다.\n맹렬한 스피드로 덤벼든다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rising Lunge",
			'fr-fr': "Botte Secrète",
			'es-es': "Embestida Ascendente",
			'it-it': "Elevazione",
			'de-de': "Aufwärtsstoß",
			'pt-br': "Investida Ascendente",
			'ko-kr': "밀어올리기"
		},

		damage: "50+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 50 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts de plus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 50데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo", "lunala"]
}

export default card
