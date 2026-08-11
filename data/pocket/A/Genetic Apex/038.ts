import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'es-es': "Ninetales",
		'it-it': "Ninetales",
		'de-de': "Vulnona",
		'pt-br': "Ninetales",
		'ko-kr': "나인테일"
	},

	illustrator: "You Iribi",
	category: "Pokemon",

	dexId: [38],
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Vulpix"
	},

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Flamethrower",
			'fr-fr': "Lance-Flammes",
			'es-es': "Lanzallamas",
			'it-it': "Lanciafiamme",
			'de-de': "Flammenwurf",
			'pt-br': "Lança-chamas",
			'ko-kr': "화염방사"
		},

		effect: {
			'en-us': "Discard 1 {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {R} de ce Pokémon.",
			'es-es': "Descarta 1 Energía {R} de este Pokémon.",
			'it-it': "Rimuovi un'Energia {R} da questo Pokémon.",
			'de-de': "Lege 1 {R}-Energie von diesem Pokémon ab.",
			'pt-br': "Descarte 1 Energia {R} deste Pokémon.",
			'ko-kr': "이 포켓몬에서 {R}에너지를 1개 트래쉬한다."
		},

		damage: "90"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.",
		'fr-fr': "On dit qu'il vit 1 000 ans et que chacune\nde ses queues a un pouvoir magique.",
		'es-es': "Cuentan que llega a vivir hasta mil\naños y que cada una de las colas\nposee poderes sobrenaturales.",
		'it-it': "Dicono che viva un millennio. Ognuna delle\nsue code è dotata di un potere magico.",
		'de-de': "Man sagt, es lebe 1000 Jahre und jedem seiner\nSchweife wohnen übernatürliche Kräfte inne.",
		'pt-br': "Dizem que vive 1.000 anos e que cada uma das\nsuas caudas é cheia de poderes sobrenaturais.",
		'ko-kr': "꼬리 하나하나에\n신통력이 담겨 있다.\n1000년을 산다고 한다."
	},

	boosters: ["charizard"]
}

export default card
