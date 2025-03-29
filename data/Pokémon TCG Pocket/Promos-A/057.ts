import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Bidoof"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "With nerves of steel, nothing can perturb it. It is more agile and active than it appears."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt"
		},

		cost: ["Colorless", "Colorless"],
		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
