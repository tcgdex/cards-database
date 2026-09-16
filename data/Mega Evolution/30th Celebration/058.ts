import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Toxel",
		fr: "Toxizap",
		de: "Toxel",
		es: "Toxel",
		it: "Toxel",
		'es-mx': "Toxel"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			es: "Apisonar",
			it: "Carica",
			'es-mx': "Colisión"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card