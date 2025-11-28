import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Oddish",
		fr: "Mystherbe",
		es: "Oddish",
		'es-mx': "Oddish",
		de: "Myrapla",
		it: "Oddish",
		pt: "Oddish"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [43],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	dexId: [43],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
			es: "Bomba Germen",
			'es-mx': "Bomba Semilla",
			de: "Samenbomben",
			it: "Semebomba",
			pt: "Bomba de Sementes"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857576, 
	}
}

export default card