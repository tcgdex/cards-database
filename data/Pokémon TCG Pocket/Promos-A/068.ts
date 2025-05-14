import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		de: "Wolwerock",
		'pt-br': "Lycanroc",
		ko: "루가루암"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rockruff"
	},

	description: {
		en: "Lycanroc attacks its prey with its sharp claws and fangs. It loyally obeys the instructions of a Trainer it trusts.",
		fr: "Il attaque ses proies à l'aide de ses griffes\net de ses crocs acérés. Il obéira toujours\nà son Dresseur s'il lui fait confiance.",
		es: "Ataca a sus presas con sus afilados colmillos y\ngarras. Solo obedece las órdenes de aquellos\nEntrenadores que logran ganarse su confianza.",
		it: "Caccia la sua preda usando le zanne e gli artigli affilatissimi.\nAscolta fedelmente le indicazioni degli Allenatori di cui si fida.",
		de: "Es greift seine Beute mit scharfen Fangzähnen\nund Krallen an. Vertraut es einem Trainer,\nbefolgt es treu dessen Anweisungen.",
		'pt-br': "Lycanroc ataca suas presas com seus caninos\ne garras afiadas. Obedece lealmente às instruções\nde um Treinador em quem confia.",
		ko: "날카로운 발톱과 이빨로 먹이를 공격한다.\n신뢰하는 트레이너의 지시에는\n충실히 따른다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Crunch",
			fr: "Mâchouille",
			es: "Triturar",
			it: "Sgranocchio",
			de: "Knirscher",
			'pt-br': "Mastigada",
			ko: "깨물어부수기"
		},

		damage: 80,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, rimuovi un'Energia a caso dal Pokémon attivo del tuo avversario.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte 1 Energia aleatória do Pokémon Ativo do seu oponente.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card