import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Spinarak",
		fr: "Mimigal"
	},

	illustrator: "IKEDA Saki",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [167],
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "It lies still in the same pose for days in its web,\nwaiting for its unsuspecting prey to wander close.",
		fr: "Il reste immobile dans sa toile pendant des jours. Il attend que sa proie se rapproche pour la capturer."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pierce",
			fr: "Transpercement"
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