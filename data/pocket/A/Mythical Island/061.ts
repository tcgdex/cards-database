import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli",
		'pt-br': "Eevee",
		'ko-kr': "이브이"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",

	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.",
		'fr-fr': "Ses multiples évolutions lui permettent\nde s'adapter à tout type de milieu naturel.",
		'es-es': "Es capaz de evolucionar de muchas maneras\npara adaptarse sin problemas a cualquier medio.",
		'it-it': "La capacità di evolversi in diverse specie gli permette\ndi adattarsi perfettamente a qualsiasi tipo di ambiente.",
		'de-de': "Um sich jeder Umgebung perfekt anpassen zu\nkönnen, ist es in der Lage, sich zu verschiedenen\nPokémon zu entwickeln.",
		'pt-br': "Sua capacidade de evoluir para muitas formas\npermite que se adapte fácil e perfeitamente\na qualquer ambiente.",
		'ko-kr': "환경 변화에 곧바로 적응할 수 있도록\n여러 형태로 진화할 수 있는\n가능성을 가지고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Continuous Steps",
			'fr-fr': "Pas Continus",
			'es-es': "Pasos Incesantes",
			'it-it': "Passi Regolari",
			'de-de': "Dauerschritte",
			'pt-br': "Passos Contínuos",
			'ko-kr': "연속스텝"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara.",
			'ko-kr': "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수 × 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
