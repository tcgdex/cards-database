import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Bidoof"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "With nerves of steel, nothing can perturb it. It is\nmore agile and active than it appears."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card