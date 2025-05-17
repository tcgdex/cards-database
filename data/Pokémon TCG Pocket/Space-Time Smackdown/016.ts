import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Wormadam",
		fr: "Cheniselle",
		es: "Wormadam",
		it: "Wormadam",
		de: "Burmadame",
		'pt-br': "Wormadam",
		ko: "도롱마담"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Burmy"
	},

	description: {
		en: "Its appearance changes depending on where it evolved. The materials on hand become a part of its body.",
		fr: "Son apparence varie selon le lieu d'évolution.\nSon corps est façonné avec les matériaux à disposition.",
		es: "Su apariencia varía según dónde evolucione.\nLos materiales que haya pasan a formar parte de su cuerpo.",
		it: "Il suo aspetto dipende dal luogo in cui si evolve.\nTutto ciò che ha intorno va a costituire il suo corpo.",
		de: "Die Umgebung, in der es sich entwickelt, bestimmt\nsein Aussehen. Es formt seinen Körper mithilfe\nder umliegenden Materialien.",
		'pt-br': "Muda de aparência dependendo do local\nde sua evolução. Os materiais que tiver\nà mão se tornam parte de seu corpo.",
		ko: "진화한 장소에 따라 모습이\n바뀐다. 가까이 있는 재료가\n몸의 일부가 된다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leaf Cutter",
			fr: "Coupe Feuille",
			es: "Hoja Cortante",
			it: "Verdetaglio",
			de: "Blattschere",
			'pt-br': "Folha Cortante",
			ko: "잎사귀베기"
		},

		damage: "60+",
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			ko: "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
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
