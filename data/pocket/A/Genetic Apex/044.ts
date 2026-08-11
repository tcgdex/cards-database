import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'de-de': "Magmar",
		'pt-br': "Magmar",
		'ko-kr': "마그마"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",

	dexId: [126],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Magma Punch",
			'fr-fr': "Poing Magma",
			'es-es': "Puño de Magma",
			'it-it': "Magma-Pugno",
			'de-de': "Magmahieb",
			'pt-br': "Soco de Magma",
			'ko-kr': "마그마펀치"
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		'en-us': "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.",
		'fr-fr': "Il achève ses proies avec ses flammes, mais\nil lui arrive de les calciner accidentellement,\nà son plus grand regret.",
		'es-es': "Abate a sus presas con las llamas\nque genera y con frecuencia acaba\nreduciéndolas a carbonilla por accidente.",
		'it-it': "Abbatte le sue prede con le fiamme, ma\nfinisce per carbonizzarle accidentalmente,\ncon suo grande rammarico.",
		'de-de': "Magmar erlegt seine Beute mit Feuer. Manchmal\nröstet es diese zu seinem Bedauern so stark,\ndass sie versehentlich verkohlt.",
		'pt-br': "Magmar incendeia suas presas, mas sempre se\narrepende ao perceber que as reduziu a cinzas.",
		'ko-kr': "불꽃으로 먹이를 꼼짝 못 하게 한다.\n무의식중에 너무 오래 익혀서\n까맣게 태우고는 후회한다."
	},

	boosters: ["charizard"]
}

export default card
