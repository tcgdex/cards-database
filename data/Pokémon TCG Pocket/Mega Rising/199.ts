import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Patrat"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [504],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Extremely cautious, one of them will always be on\nthe lookout, but it won't notice a foe coming\nfrom behind."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card