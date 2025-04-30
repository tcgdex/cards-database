import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Koffing",
		fr: "Smogo",
		es: "Koffing",
		de: "Smogon",
		it: "Koffing",
		pt: "Koffing",
		'es-mx': "Koffing"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			de: "Tackle",
			it: "Azione",
			pt: "Investida",
			'es-mx': "Tacleada"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Suffocating Gas",
			fr: "Gaz Suffocant",
			es: "Gas Sofocante",
			de: "Würgegas",
			it: "Gas Soffocante",
			pt: "Gás Asfixiante",
			'es-mx': "Gas Sofocante"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
