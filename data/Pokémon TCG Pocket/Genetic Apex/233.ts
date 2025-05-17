import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gyarados",
		fr: "Léviator",
		es: "Gyarados",
		it: "Gyarados",
		de: "Garados",
		'pt-br': "Gyarados",
		ko: "갸라도스"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		en: "Magikarp"
	},

	attacks: [{
		cost: ["Water", "Water", "Water", "Water"],

		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
			es: "Hiperrayo",
			it: "Iper Raggio",
			de: "Hyperstrahl",
			'pt-br': "Hiper-raio",
			ko: "파괴광선"
		},

		effect: {
			en: "Discard a random Energy from your opponent's Active Pokémon.",
			fr: "Défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
			it: "Rimuovi un'Energia a caso dal Pokémon attivo del tuo avversario.",
			de: "Lege 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
			'pt-br': "Descarte 1 Energia aleatória do Pokémon Ativo do seu oponente.",
			ko: "상대의 배틀 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다."
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	rarity: "One Star",

	description: {
		en: "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.",
		fr: "Lorsqu'il apparaît, il saccage tout. Sa fureur\nne se calme pas tant qu'il n'a pas tout détruit.",
		es: "Cuando aparece, monta en cólera. No deja\nde estar furioso hasta que lo destruye todo.",
		it: "Quando esce allo scoperto in preda alla furia,\nnon si placa finché non ha raso al suolo ogni cosa.",
		de: "Taucht es auf, randaliert es. Es beruhigt sich erst,\nwenn es alles um sich zerstört hat.",
		'pt-br': "Assim que aparece, ele causa tumulto\ne fica enfurecido até destruir tudo em volta.",
		ko: "한번 모습을 나타내면\n주변 전체를 태워 버리지 않고는\n분노가 가라앉지 않는다고 전해진다."
	},

	boosters: ["pikachu"]
}

export default card
