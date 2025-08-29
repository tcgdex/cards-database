import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Magcargo"
	},

	illustrator: "Eri Yamaki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Slugma"
	},

	description: {
		en: "Its brittle shell occasionally spouts intense flames\nthat circulate throughout its body."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heat Blast"
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