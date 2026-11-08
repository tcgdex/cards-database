import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Seaking",
		'fr-fr': "Poissoroy",
		'es-es': "Seaking",
		'it-it': "Seaking",
		'de-de': "Golking",
		'pt-br': "Seaking",
		'ko-kr': "왕콘치"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",

	dexId: [119],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Goldeen"
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Horn Hazard",
			'fr-fr': "Chanc'korne",
			'es-es': "Azar Cuerno",
			'it-it': "Incorna-Rischio",
			'de-de': "Gefährliches Horn",
			'pt-br': "Chifre Perigoso",
			'ko-kr': "뿔로쪼기"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'ko-kr': "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
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
		'en-us': "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.",
		'fr-fr': "En automne, à la saison des amours, il fait des réserves\nde graisse et arbore des couleurs chatoyantes.",
		'es-es': "En otoño gana algo de peso para atraer a posibles\nparejas y se cubre de llamativos colores.",
		'it-it': "In autunno ingrassa in previsione della stagione\ndegli amori e assume colori sgargianti.",
		'de-de': "Im Herbst legt es an Gewicht zu\nund erscheint in prächtigen Farben,\num so einen Partner anzulocken.",
		'pt-br': "No outono, ganha peso para atrair\npossíveis companheiros. Adorna-se\nem lindas cores.",
		'ko-kr': "가을이 되면 짝짓기를 위해\n몸에 윤기가 돌게 되며\n매우 아름다운 색으로 변화한다."
	},

	boosters: ["pikachu"]
}

export default card
