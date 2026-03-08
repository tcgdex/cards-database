import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Lombre"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [271],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Lotad"
	},

	description: {
		en: "It lives at the water's edge where it is sunny.\nIt sleeps on a bed of water grass by day and\nbecomes active at night."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gentle Slap"
		},

		damage: 40,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card