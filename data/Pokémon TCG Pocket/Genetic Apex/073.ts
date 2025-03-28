import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Seaking"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Goldeen"
	},


	attacks: [{
		cost: ["Water"],

		name: {
			en: "Horn Hazard"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.",
	}
}

export default card
