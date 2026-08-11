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

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [413],
	hp: 120,
	types: ["Grass"],

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
			'en-us': "Leaf Cutter",
			'fr-fr': "Coupe Feuille",
			'es-es': "Hoja Cortante",
			'it-it': "Verdetaglio",
			'de-de': "Blattschere",
			'pt-br': "Folha Cortante",
			'ko-kr': "잎사귀베기"
		},

		damage: "60+",
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga", "palkia"]
}

export default card
