import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgey"
	},

	illustrator: "kodama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [16],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It is docile and prefers to avoid conflict.\nIf disturbed, however, it can ferociously strike back."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Peck"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card