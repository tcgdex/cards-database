import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Maractus"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [556],
	hp: 80,
	types: ["Grass"],

	description: {
		'en-us': "Arid regions are their habitat. They move\nrhythmically, making a sound similar to maracas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Dazzle Dance"
		},

		damage: 40,
		cost: ["Grass", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card