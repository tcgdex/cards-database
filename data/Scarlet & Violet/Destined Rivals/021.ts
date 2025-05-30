import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Smoliv",
		fr: "Olivini",
		de: "Olini",
		it: "Smoliv",
		es: "Smoliv",
		pt: "Smoliv",
		'es-mx': "Smoliv"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			es: "Apisonar",
			pt: "Aríete",
			'es-mx': "Colisión"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card