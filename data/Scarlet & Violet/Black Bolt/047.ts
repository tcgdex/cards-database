import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Timburr",
		fr: "Charpenti",
		de: "Praktibalk",
		it: "Timburr",
		pt: "Timburr",
		es: "Timburr",
		'es-mx': "Timburr"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			de: "Fußkick",
			it: "Colpo Basso",
			pt: "Rasteira",
			es: "Patada Baja",
			'es-mx': "Patada Baja"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Strength",
			fr: "Force",
			de: "Stärke",
			it: "Forza",
			pt: "Força",
			es: "Fuerza",
			'es-mx': "Fuerza"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836003
	}
}

export default card