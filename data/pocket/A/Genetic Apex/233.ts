import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator",
		'es-es': "Gyarados",
		'it-it': "Gyarados",
		'de-de': "Garados",
		'pt-br': "Gyarados",
		'ko-kr': "갸라도스"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",

	dexId: [130],
	hp: 150,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Magikarp"
	},

	attacks: [{
		cost: ["Water", "Water", "Water", "Water"],

		name: {
			'en-us': "Hyper Beam",
			'fr-fr': "Ultralaser",
			'es-es': "Hiperrayo",
			'it-it': "Iper Raggio",
			'de-de': "Hyperstrahl",
			'pt-br': "Hiper-raio",
			'ko-kr': "파괴광선"
		},

		effect: {
			'en-us': "Discard a random Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
			'it-it': "Rimuovi un'Energia a caso dal Pokémon attivo del tuo avversario.",
			'de-de': "Lege 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
			'pt-br': "Descarte 1 Energia aleatória do Pokémon Ativo do seu oponente.",
			'ko-kr': "상대의 배틀 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다."
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 4,
	rarity: "One Star",

	description: {
		'en-us': "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.",
		'fr-fr': "Lorsqu'il apparaît, il saccage tout. Sa fureur\nne se calme pas tant qu'il n'a pas tout détruit.",
		'es-es': "Cuando aparece, monta en cólera. No deja\nde estar furioso hasta que lo destruye todo.",
		'it-it': "Quando esce allo scoperto in preda alla furia,\nnon si placa finché non ha raso al suolo ogni cosa.",
		'de-de': "Taucht es auf, randaliert es. Es beruhigt sich erst,\nwenn es alles um sich zerstört hat.",
		'pt-br': "Assim que aparece, ele causa tumulto\ne fica enfurecido até destruir tudo em volta.",
		'ko-kr': "한번 모습을 나타내면\n주변 전체를 태워 버리지 않고는\n분노가 가라앉지 않는다고 전해진다."
	},

	boosters: ["pikachu"]
}

export default card
