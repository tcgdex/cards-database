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

	illustrator: "Shimaris Yukichi",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Satisfied Spark",
			fr: "Étincelle Satisfaite",
			de: "Freudenfunke",
			es: "Chispa Satisfecha",
			it: "Scintilla Soddisfatta",
			'es-mx': "Chispa Satisfecha"
		},

		damage: 100,
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card