import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [309],
	set: Set,

	name: {
		en: "Electrike",
		fr: "Dynavolt",
		de: "Frizelbliz",
		it: "Electrike",
		es: "Electrike",
		pt: "Electrike",
		'es-mx': "Electrike"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			es: "Patada Trasera",
			pt: "Chute Traseiro",
			'es-mx': "Patada Trasera"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Tiny Bolt",
			fr: "Foudre Minuscule",
			de: "Mini-Blitz",
			it: "Minifulmine",
			es: "Relampaguito",
			pt: "Corisquinho",
			'es-mx': "Minirrayo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card