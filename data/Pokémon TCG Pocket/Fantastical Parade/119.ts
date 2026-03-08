import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Doublade"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		en: "Honedge"
	},

	description: {
		en: "The two swords employ a strategy of rapidly\nalternating between offense and defense to\nbring down their prey."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dual Blades"
		},

		damage: 40,
		cost: ["Metal", "Metal"],

		effect: {
			en: "Flip 2 coins. This attack does 40 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card