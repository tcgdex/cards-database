import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "When it is angered, it immediately discharges the\nenergy stored in the pouches in its cheeks."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card