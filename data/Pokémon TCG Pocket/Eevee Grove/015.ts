import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Salazzle",
		fr: "Malamandre"
	},

	illustrator: "Shibuzoh.",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [758],
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Salandit"
	},

	description: {
		en: "Salazzle makes its opponents light-headed with\npoisonous gas, then captivates them with alluring\nmovements to turn them into loyal servants.",
		fr: "Il étourdit ses adversaires avec son gaz toxique, puis il les asservit en exécutant une danse envoûtante."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Combustion",
			fr: "Fournaise"
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