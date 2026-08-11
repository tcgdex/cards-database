import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drednaw",
		'fr-fr': "Torgamord",
		'es-es': "Drednaw",
		'it-it': "Drednaw",
		'de-de': "Kamalm",
		'pt-br': "Drednaw",
		'ko-kr': "갈가부기"
	},

	illustrator: "nisimono",
	category: "Pokemon",

	dexId: [834],
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Chewtle"
	},

	description: {
		'en-us': "Its massive, jagged teeth can crush a boulder in a single bite. This Pokémon has an extremely vicious disposition.",
		'fr-fr': "Ce Pokémon très agressif peut\nfacilement broyer des rochers grâce à\nson énorme mâchoire en dents de scie.",
		'es-es': "Con sus fuertes mandíbulas serradas es capaz\nde destrozar rocas de un mordisco. Tiene un\ntemperamento extremadamente violento.",
		'it-it': "Con la sua grande mascella frastagliata riesce\na frantumare una roccia con un morso. Ha un\ntemperamento estremamente aggressivo.",
		'de-de': "Ein Biss mit seinem riesigen, gezackten Maul\nreicht aus, um einen Felsbrocken zu zermalmen.\nEs besitzt ein äußerst aggressives Temperament.",
		'pt-br': "O seu gigantesco dente afiado pode destruir um rochedo\ncom apenas uma mordida. Este Pokémon tem tendências\nextremamente violentas.",
		'ko-kr': "매우 크고 뾰족뾰족한 입은\n한 번 물기만 해도 암석을 부술 정도다.\n성질이 매우 흉포하다."
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

		damage: 70,
		cost: ["Water", "Water", "Water"],

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
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
