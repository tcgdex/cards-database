import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Golduck"
	},

	illustrator: "Scav",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Psyduck"
	},

	description: {
		en: "When it swims at full speed using its long,\nwebbed limbs, its forehead somehow begins\nto glow."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Aqua Edge"
		},

		damage: 70,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card