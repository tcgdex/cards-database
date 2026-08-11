import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lycanroc",
		'fr-fr': "Lougaroc",
		'es-es': "Lycanroc",
		'it-it': "Lycanroc",
		'de-de': "Wolwerock",
		'pt-br': "Lycanroc",
		'ko-kr': "루가루암"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [745],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Rockruff"
	},

	description: {
		'en-us': "Lycanroc attacks its prey with its sharp claws and fangs. It loyally obeys the instructions of a Trainer it trusts.",
		'fr-fr': "Il attaque ses proies à l'aide de ses griffes\net de ses crocs acérés. Il obéira toujours\nà son Dresseur s'il lui fait confiance.",
		'es-es': "Ataca a sus presas con sus afilados colmillos y\ngarras. Solo obedece las órdenes de aquellos\nEntrenadores que logran ganarse su confianza.",
		'it-it': "Caccia la sua preda usando le zanne e gli artigli affilatissimi.\nAscolta fedelmente le indicazioni degli Allenatori di cui si fida.",
		'de-de': "Es greift seine Beute mit scharfen Fangzähnen\nund Krallen an. Vertraut es einem Trainer,\nbefolgt es treu dessen Anweisungen.",
		'pt-br': "Lycanroc ataca suas presas com seus caninos\ne garras afiadas. Obedece lealmente às instruções\nde um Treinador em quem confia.",
		'ko-kr': "날카로운 발톱과 이빨로 먹이를 공격한다.\n신뢰하는 트레이너의 지시에는\n충실히 따른다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Crunch",
			'fr-fr': "Mâchouille",
			'es-es': "Triturar",
			'it-it': "Sgranocchio",
			'de-de': "Knirscher",
			'pt-br': "Mastigada",
			'ko-kr': "깨물어부수기"
		},

		damage: 80,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, rimuovi un'Energia a caso dal Pokémon attivo del tuo avversario.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte 1 Energia aleatória do Pokémon Ativo do seu oponente.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card