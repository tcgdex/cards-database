import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Seaking",
		fr: "Poissoroy",
		es: "Seaking",
		it: "Seaking",
		de: "Golking",
		'pt-br': "Seaking",
		ko: "왕콘치"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Goldeen"
	},


	attacks: [{
		cost: ["Water"],

		name: {
			en: "Horn Hazard",
			fr: "Chanc'korne",
			es: "Azar Cuerno",
			it: "Incorna-Rischio",
			de: "Gefährliches Horn",
			'pt-br': "Chifre Perigoso",
			ko: "뿔로쪼기"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.",
		fr: "En automne, à la saison des amours, il fait des réserves\nde graisse et arbore des couleurs chatoyantes.",
		es: "En otoño gana algo de peso para atraer a posibles\nparejas y se cubre de llamativos colores.",
		it: "In autunno ingrassa in previsione della stagione\ndegli amori e assume colori sgargianti.",
		de: "Im Herbst legt es an Gewicht zu\nund erscheint in prächtigen Farben,\num so einen Partner anzulocken.",
		'pt-br': "No outono, ganha peso para atrair\npossíveis companheiros. Adorna-se\nem lindas cores.",
		ko: "가을이 되면 짝짓기를 위해\n몸에 윤기가 돌게 되며\n매우 아름다운 색으로 변화한다."
	}
}

export default card
