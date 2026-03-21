import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

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

	illustrator: "KEIICHIRO ITO",
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
			en: "Fighting Tackle",
			fr: "Charge Combative",
			es: "Placaje Lucha",
			it: "Azione da Combattente",
			de: "Kampf-Tackle",
			'pt-br': "Investida de Luta",
			ko: "투지의태클"
		},

		damage: "40+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "If your opponent’s Active Pokémon is a Pokémon {ex}, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-{ex}, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon {ex}, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-{ex}, questo attacco infligge 80 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-{ex} ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {ex}, este ataque causará 80 pontos de dano a mais.",
			ko: "상대의 배틀 포켓몬이 「포켓몬 {ex}」라면 80데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
