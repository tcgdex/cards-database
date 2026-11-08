import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Absol"
	},

	illustrator: "nagimiso",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [359],
	hp: 80,
	types: ["Darkness"],

	description: {
		'en-us': "Because of this Pokémon's ability to detect\ndanger, people mistook Absol as a bringer\nof doom."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ominous Claw"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent reveals their hand. Choose a Supporter card you find there and discard it."
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