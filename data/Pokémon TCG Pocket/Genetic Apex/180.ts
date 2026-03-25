import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		de: "Caesurio",
		'pt-br': "Bisharp",
		ko: "절각참"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",

	dexId: [625],
	hp: 90,
	types: ["Metal"],
	stage: "Stage1",

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
		es: "Pawniard",
		it: "Pawniard",
		pt: "Pawniard",
		de: "Gladiantri"
	},

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			es: "Garra Metal",
			it: "Ferrartigli",
			de: "Metallklaue",
			'pt-br': "Garra de Metal",
			ko: "메탈클로"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "This Pokémon commands a group of several Pawniard. Groups that are defeated in territorial disputes are absorbed by the winning side.",
		fr: "Il dirige des cohortes de Scalpion. Les groupes qui sont vaincus\nlors de guerres de territoires rejoignent les vainqueurs.",
		es: "Dirige a varios Pawniard para conformar\ngrupos. Tras una disputa territorial, el\ngrupo victorioso incorpora a los vencidos.",
		it: "Comanda dei gruppi di Pawniard. I gruppi\nche risultano perdenti nelle lotte per il\nterritorio vengono assorbiti dai vincitori.",
		de: "Es dient als Anführer einer Schar Gladiantri.\nNach Revierkämpfen werden die Verlierer in\ndie Gewinnerschar assimiliert.",
		'pt-br': "Este Pokémon lidera um grupo de Pawniard.\nOs grupos que são derrotados em disputas\nterritoriais são incorporados ao lado vencedor.",
		ko: "자망칼을 거느리며 무리를 만든다.\n영역을 건 싸움에서 진 무리는\n이긴 쪽에 흡수된다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
