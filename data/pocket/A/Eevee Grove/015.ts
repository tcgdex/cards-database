import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre"
	},

	illustrator: "Shibuzoh.",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [758],
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Salandit"
	},

	description: {
		'en-us': "Salazzle makes its opponents light-headed with\npoisonous gas, then captivates them with alluring\nmovements to turn them into loyal servants.",
		'fr-fr': "Il étourdit ses adversaires avec son gaz toxique, puis il les asservit en exécutant une danse envoûtante."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise"
		},

		damage: 40,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 0
}

export default card