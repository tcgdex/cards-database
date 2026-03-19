import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Thwackey"
	},

	illustrator: "Akira Komayama",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [811],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Grookey"
	},

	description: {
		en: "When it's drumming out rapid beats in battle, it\ngets so caught up in the rhythm that it won't even\nnotice that it's already knocked out its opponent."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Hammer In"
		},

		damage: 50,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card