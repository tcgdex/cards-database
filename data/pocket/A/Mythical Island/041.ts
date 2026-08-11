import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'de-de': "Menki",
		'pt-br': "Mankey",
		'ko-kr': "망키"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",

	dexId: [56],
	hp: 50,
	types: ["Fighting"],

	description: {
		'en-us': "It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.",
		'fr-fr': "Il vit en groupe au sommet des arbres. S'il perd\nses congénères de vue, la solitude le rend furieux.",
		'es-es': "Vive en grupos en las copas de\nlos árboles. Si pierde de vista a su\nmanada, se siente solo y se enfada.",
		'it-it': "Vivono in branchi in cima agli alberi. Se perdono\nil contatto con il gruppo s'infuriano per la solitudine.",
		'de-de': "Es lebt mit Artgenossen in Baumkronen.\nVerliert es sie aus den Augen, wird es\nvor Einsamkeit sofort zornig.",
		'pt-br': "Vive em grupo no topo de árvores.\nSe perde seu grupo de vista, a solidão\ndeixa este Pokémon furioso.",
		'ko-kr': "나무 위에 무리 지어 산다.\n무리에서 떨어진 망키는\n외로운 나머지 금방 화를 낸다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Focus Fist",
			'fr-fr': "Poing Concentré",
			'es-es': "Puño Infalible",
			'it-it': "Concentrapugno",
			'de-de': "Fokussierfaust",
			'pt-br': "Punho Focalizado",
			'ko-kr': "기합찌르기"
		},

		damage: 50,
		cost: ["Fighting"],

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'ko-kr': "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
