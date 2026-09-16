import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zweilous",
		fr: "Diamat",
		de: "Duodino",
		es: "Zweilous",
		it: "Zweilous",
		'es-mx': "Zweilous"
	},

	illustrator: "IKEDA Saki",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			es: "Mordisco",
			it: "Morso",
			'es-mx': "Mordida"
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			de: "Einhämmern",
			es: "Martillear",
			it: "Martello",
			'es-mx': "Martillar"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card