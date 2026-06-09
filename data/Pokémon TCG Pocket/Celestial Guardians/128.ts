import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

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

	illustrator: "Kazumasa Yasukuni",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [128],
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "When Tauros begins whipping itself with its tails, it's a warning that the Pokémon is about to charge with astounding speed.",
		fr: "Il faut prendre garde quand un Tauros fouette\nson corps avec ses queues. Cela signifie qu'il\ns'apprête à charger à une vitesse démentielle.",
		es: "Conviene tener cuidado si empieza a\nfustigarse con las colas, pues es señal\nde que va a cargar a máxima velocidad.",
		it: "Quando comincia a frustarsi con le sue stesse\ncode è pericoloso, in quanto è segno che sta\nper partire alla carica a tutta velocità.",
		de: "Peitscht es seinen Körper mit seinen Schweifen\naus, ist Vorsicht geboten, denn es steht kurz\ndavor, mit Karacho auf sein Ziel loszustürmen.",
		'pt-br': "Quando Tauros começa a chicotear a si mesmo\ncom suas caudas, é um aviso de que está prestes\na atacar com velocidade surpreendente.",
		ko: "꼬리로 자신의 몸을\n때리기 시작하면 위험하다.\n맹렬한 스피드로 덤벼든다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rising Lunge",
			fr: "Botte Secrète",
			es: "Embestida Ascendente",
			it: "Elevazione",
			de: "Aufwärtsstoß",
			'pt-br': "Investida Ascendente",
			ko: "밀어올리기"
		},

		damage: "50+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 50 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts de plus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
			ko: "동전을 1번 던져서 앞면이 나오면 50데미지를 추가한다."
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
