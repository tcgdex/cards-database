import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Absol ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [359],
	hp: 170,
	types: ["Darkness"],

	description: {
		'en-us': "As the energy of Mega Evolution fills it, its fur\nbristles. What you see on its back are not true\nwings, and this Pokémon isn't able to fly."
	},

	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Darkness Claw"
		},

		damage: 80,
		cost: ["Darkness", "Darkness"],

		effect: {
			'en-us': "Your opponent reveals their hand. Choose a Supporter card you find there and discard it."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card