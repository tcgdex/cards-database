import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Ninetales",
		fr: "Feunard",
		de: "Vulnona",
		es: "Ninetales",
		it: "Ninetales",
		'es-mx': "Ninetales"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flame Tail",
			fr: "Queue de Flammes",
			de: "Flammenschweif",
			es: "Cola de Fuego",
			it: "Codafiamma",
			'es-mx': "Cola de Fuego"
		},

		damage: 60,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card