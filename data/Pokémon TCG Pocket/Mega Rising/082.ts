import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mareep"
	},

	illustrator: "saino misaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "Its fleece grows continually. In the summer,\nthe fleece is fully shed, but it grows back in\na week."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rear Kick"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card