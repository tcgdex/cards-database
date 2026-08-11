import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wormadam",
		'fr-fr': "Cheniselle",
		'es-es': "Wormadam",
		'it-it': "Wormadam",
		'de-de': "Burmadame",
		'pt-br': "Wormadam",
		'ko-kr': "도롱마담"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [413],
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Burmy"
	},

	description: {
		'en-us': "Its appearance changes depending on where it evolved. The materials on hand become a part of its body.",
		'fr-fr': "Son apparence varie selon le lieu d'évolution.\nSon corps est façonné avec les matériaux à disposition.",
		'es-es': "Su apariencia varía según dónde evolucione.\nLos materiales que haya pasan a formar parte de su cuerpo.",
		'it-it': "Il suo aspetto dipende dal luogo in cui si evolve.\nTutto ciò che ha intorno va a costituire il suo corpo.",
		'de-de': "Die Umgebung, in der es sich entwickelt, bestimmt\nsein Aussehen. Es formt seinen Körper mithilfe\nder umliegenden Materialien.",
		'pt-br': "Muda de aparência dependendo do local\nde sua evolução. Os materiais que tiver\nà mão se tornam parte de seu corpo.",
		'ko-kr': "진화한 장소에 따라 모습이\n바뀐다. 가까이 있는 재료가\n몸의 일부가 된다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Iron Head",
			'fr-fr': "Tête de Fer",
			'es-es': "Cabeza de Hierro",
			'it-it': "Metaltestata",
			'de-de': "Eisenschädel",
			'pt-br': "Cabeça de Ferro",
			'ko-kr': "아이언헤드"
		},

		damage: "50+",
		cost: ["Metal", "Metal"],

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'ko-kr': "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수 × 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
