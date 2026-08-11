import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'de-de': "Dratini",
		'pt-br': "Dratini",
		'ko-kr': "미뇽"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",

	dexId: [147],
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'de-de': "Ramme",
			'pt-br': "Aríete",
			'ko-kr': "부딪치기"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "It sheds many layers of skin as it grows larger. During this process, it is protected by a rapid waterfall.",
		'fr-fr': "Ce Pokémon grandit en muant à répétition. Lors de\nce processus, il s'abrite derrière une puissante cascade.",
		'es-es': "Durante la etapa de crecimiento, muda muchas\nveces de piel y se protege mediante una cascada.",
		'it-it': "Cresce cambiando ripetutamente la\npelle. Durante la muta, si protegge tra\nle acque impetuose di una cascata.",
		'de-de': "Es häutet sich, um zu wachsen. Dabei wird es von\neinem tosenden Wasserfall beschützt.",
		'pt-br': "Troca de pele várias vezes à medida que cresce. Durante\neste processo, é protegido por uma cachoeira agitada.",
		'ko-kr': "세차게 떨어지는 폭포의 보호를 받으며\n탈피를 거듭해 점점 크게 자란다."
	},

	boosters: ["mewtwo"]
}

export default card
