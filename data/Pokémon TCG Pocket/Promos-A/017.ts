import { Card } from "../../../interfaces"
import Set from "../Promos-A"

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

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			es: "Carga Descuidada",
			it: "Carica Avventata",
			de: "Waghalsiger Sturmangriff",
			'pt-br': "Carga Indomável",
			ko: "돌격"
		},

		cost: ["Fighting"],
		damage: 30,

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			ko: "이 포켓몬에게도 10데미지를 준다."
		}
	}],

	hp: 50,

	description: {
		en: "It lives in groups in the treetops. If it loses sight of\nits group, it becomes infuriated by its loneliness.",
		fr: "Il vit en groupe au sommet des arbres. S'il perd\nses congénères de vue, la solitude le rend furieux.",
		es: "Vive en grupos en las copas de\nlos árboles. Si pierde de vista a su\nmanada, se siente solo y se enfada.",
		it: "Vivono in branchi in cima agli alberi. Se perdono\nil contatto con il gruppo s'infuriano per la solitudine.",
		de: "Es lebt mit Artgenossen in Baumkronen.\nVerliert es sie aus den Augen, wird es\nvor Einsamkeit sofort zornig.",
		'pt-br': "Vive em grupo no topo de árvores.\nSe perde seu grupo de vista, a solidão\ndeixa este Pokémon furioso.",
		ko: "나무 위에 무리 지어 산다.\n무리에서 떨어진 망키는\n외로운 나머지 금방 화를 낸다."
	},

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol1"]
}

export default card
