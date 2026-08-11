import { Card } from "models/database/card"
import Set from "../Shining Revelry"

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

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [126],
	hp: 70,
	types: ["Fire"],

	description: {
		'en-us': "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.",
		'fr-fr': "Il achève ses proies avec ses flammes, mais\nil lui arrive de les calciner accidentellement,\nà son plus grand regret.",
		'es-es': "Abate a sus presas con las llamas\nque genera y con frecuencia acaba\nreduciéndolas a carbonilla por accidente.",
		'it-it': "Abbatte le sue prede con le fiamme, ma\nfinisce per carbonizzarle accidentalmente,\ncon suo grande rammarico.",
		'de-de': "Magmar erlegt seine Beute mit Feuer. Manchmal\nröstet es diese zu seinem Bedauern so stark,\ndass sie versehentlich verkohlt.",
		'pt-br': "Magmar incendeia suas presas, mas sempre se\narrepende ao perceber que as reduziu a cinzas.",
		'ko-kr': "불꽃으로 먹이를 꼼짝 못 하게 한다.\n무의식중에 너무 오래 익혀서\n까맣게 태우고는 후회한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'de-de': "Flackern",
			'pt-br': "Chama",
			'ko-kr': "불꽃"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card