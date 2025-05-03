import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmo"
	},

	illustrator: "Saboteri",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pawmi"
	},

	description: {
		en: "When its group is attacked, Pawmo is the first to leap into battle, defeating enemies with a fighting technique that utilizes electric shocks."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Punch"
		},

		damage: 40,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card