import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Spinarak"
	},

	illustrator: "IKEDA Saki",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "It lies still in the same pose for days in its web,\nwaiting for its unsuspecting prey to wander close."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pierce"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card