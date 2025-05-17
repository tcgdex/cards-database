import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		de: "Menki",
		'pt-br': "Mankey",
		ko: "망키"
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			es: "Patada Baja",
			it: "Colpo Basso",
			de: "Fußkick",
			'pt-br': "Rasteira",
			ko: "안다리걸기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.",
		fr: "Il vit en groupe au sommet des arbres. S'il perd\nses congénères de vue, la solitude le rend furieux.",
		es: "Vive en grupos en las copas de\nlos árboles. Si pierde de vista a su\nmanada, se siente solo y se enfada.",
		it: "Vivono in branchi in cima agli alberi. Se perdono\nil contatto con il gruppo s'infuriano per la solitudine.",
		de: "Es lebt mit Artgenossen in Baumkronen.\nVerliert es sie aus den Augen, wird es\nvor Einsamkeit sofort zornig.",
		'pt-br': "Vive em grupo no topo de árvores.\nSe perde seu grupo de vista, a solidão\ndeixa este Pokémon furioso.",
		ko: "나무 위에 무리 지어 산다.\n무리에서 떨어진 망키는\n외로운 나머지 금방 화를 낸다."
	},

	boosters: ["charizard"]
}

export default card
