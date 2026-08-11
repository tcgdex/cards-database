import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod"
	},

	illustrator: "Eri Yamaki",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [219],
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Slugma"
	},

	description: {
		'en-us': "Its brittle shell occasionally spouts intense flames\nthat circulate throughout its body.",
		'fr-fr': "Sa coquille, très fragile, projette régulièrement des flammes qui circulent dans son corps."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur"
		},

		damage: 90,
		cost: ["Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card