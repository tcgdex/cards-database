import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mareep",
		fr: "Wattouat"
	},

	illustrator: "saino misaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [179],
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "Its fleece grows continually. In the summer,\nthe fleece is fully shed, but it grows back in\na week.",
		fr: "Sa toison pousse constamment. En été, même tondu, sa laine repousse en moins d'une semaine."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rear Kick",
			fr: "Ruade"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card