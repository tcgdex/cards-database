import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [37],
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "While young, it has six gorgeous tails. When it\ngrows, several new tails are sprouted.",
		'fr-fr': "Quand il est jeune, ce Pokémon a six queues magnifiques. De nouvelles queues apparaissent tout au long de sa croissance."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card