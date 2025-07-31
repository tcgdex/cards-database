import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Binacle"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "After two Binacle find a suitably sized rock, they\nadhere themselves to it and live together.\nThey cooperate to gather food during high tide."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dual Chop"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card