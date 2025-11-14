import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Vibrava",
		fr: "Vibraninf",
		es: "Vibrava",
		'es-mx': "Vibrava",
		de: "Vibrava",
		it: "Vibrava",
		pt: "Vibrava"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Super Vibration",
			fr: "Super Vibration",
			es: "Supervibración",
			'es-mx': "Supervibración",
			de: "Superschwingung",
			it: "Vibrazione Super",
			pt: "Supervibração"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card