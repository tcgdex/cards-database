import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dratini",
		fr: "Minidraco",
		es: "Dratini",
		it: "Dratini",
		de: "Dratini",
		'pt-br': "Dratini",
		ko: "미뇽"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			de: "Ramme",
			'pt-br': "Aríete",
			ko: "부딪치기"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It sheds many layers of skin as it grows larger. During this process, it is protected by a rapid waterfall.",
		fr: "Ce Pokémon grandit en muant à répétition. Lors de\nce processus, il s'abrite derrière une puissante cascade.",
		es: "Durante la etapa de crecimiento, muda muchas\nveces de piel y se protege mediante una cascada.",
		it: "Cresce cambiando ripetutamente la\npelle. Durante la muta, si protegge tra\nle acque impetuose di una cascata.",
		de: "Es häutet sich, um zu wachsen. Dabei wird es von\neinem tosenden Wasserfall beschützt.",
		'pt-br': "Troca de pele várias vezes à medida que cresce. Durante\neste processo, é protegido por uma cachoeira agitada.",
		ko: "세차게 떨어지는 폭포의 보호를 받으며\n탈피를 거듭해 점점 크게 자란다."
	}
}

export default card
