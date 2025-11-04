import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Luvdisc"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "During the spawning season, countless Luvdisc\ncongregate at coral reefs, turning the waters pink."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Paired Tackle"
		},

		damage: 30,
		cost: ["Water", "Water"],

		effect: {
			en: "If you have exactly 2, 4, or 6 cards in your hand, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card