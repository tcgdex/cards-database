import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'de-de': "Caesurio",
		'pt-br': "Bisharp",
		'ko-kr': "절각참"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",

	dexId: [625],
	hp: 90,
	types: ["Metal"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Pawniard"
	},

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier",
			'es-es': "Garra Metal",
			'it-it': "Ferrartigli",
			'de-de': "Metallklaue",
			'pt-br': "Garra de Metal",
			'ko-kr': "메탈클로"
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
		'en-us': "This Pokémon commands a group of several Pawniard. Groups that are defeated in territorial disputes are absorbed by the winning side.",
		'fr-fr': "Il dirige des cohortes de Scalpion. Les groupes qui sont vaincus\nlors de guerres de territoires rejoignent les vainqueurs.",
		'es-es': "Dirige a varios Pawniard para conformar\ngrupos. Tras una disputa territorial, el\ngrupo victorioso incorpora a los vencidos.",
		'it-it': "Comanda dei gruppi di Pawniard. I gruppi\nche risultano perdenti nelle lotte per il\nterritorio vengono assorbiti dai vincitori.",
		'de-de': "Es dient als Anführer einer Schar Gladiantri.\nNach Revierkämpfen werden die Verlierer in\ndie Gewinnerschar assimiliert.",
		'pt-br': "Este Pokémon lidera um grupo de Pawniard.\nOs grupos que são derrotados em disputas\nterritoriais são incorporados ao lado vencedor.",
		'ko-kr': "자망칼을 거느리며 무리를 만든다.\n영역을 건 싸움에서 진 무리는\n이긴 쪽에 흡수된다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
