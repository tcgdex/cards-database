import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Susumu Maeya",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Rollout",
			fr: "Roulade",
			de: "Walzer",
			es: "Rodar",
			it: "Rotolamento",
			'es-mx': "Rodada"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card