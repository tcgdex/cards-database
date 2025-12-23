import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Snom",
		fr: "Frissonille",
		es: "Snom",
		it: "Snom",
		de: "Snomnom",
		'pt-br': "Snom",
		ko: "누니머기"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",

	dexId: [872],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			de: "Ramme",
			'pt-br': "Aríete",
			ko: "부딪치기"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It eats snow that has accumulated on the ground. It prefers soft, freshly fallen snow, so it will eat its way up a mountain, aiming for the peak.",
		fr: "Il se nourrit de la neige qui s'accumule au sol.\nIl la préfère fraîche et va jusqu'au sommet des\nmontagnes en mangeant la neige sur son chemin.",
		es: "Se alimenta de la nieve acumulada en el terreno.\nComo adora la suave nieve virgen, irá comiendo\nmontaña arriba hasta llegar a la cima.",
		it: "Si nutre della neve accumulata sul terreno.\nPredilige quella fresca e soffice, che mangia\nman mano che avanza verso la cima dei monti.",
		de: "Es ernährt sich von am Boden angesammeltem\nSchnee. Da es weichen Neuschnee bevorzugt,\nfrisst es sich bergauf bis zum Gipfel vor.",
		'pt-br': "Alimenta-se da neve acumulada no chão. Prefere\nneve fofa que acabou de cair, então comerá a\nneve no caminho até o topo da montanha.",
		ko: "땅에 쌓인 눈이 먹이다.\n새로 내린 부드러운 눈을 좋아해서\n산꼭대기를 향해 먹으며 움직인다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
