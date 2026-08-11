import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chatot"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [441],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "It can learn and speak human words. If they gather,\nthey all learn the same saying."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sleepy Song"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card