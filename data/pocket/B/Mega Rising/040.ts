import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Darmanitan"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [555],
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Darumaka"
	},

	description: {
		'en-us': "This Pokémon's power level rises along with the\ntemperature of its fire, which can reach 2,500\ndegrees Fahrenheit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Darmani-Hands"
		},

		damage: 80,
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 more damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card