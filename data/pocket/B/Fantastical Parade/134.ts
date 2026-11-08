import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [287],

	name: {
		'en-us': "Slakoth"
	},

	illustrator: "okayamatakatoshi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "The way Slakoth lolls around makes anyone who\nwatches it feel like doing the same."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Yawn"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card