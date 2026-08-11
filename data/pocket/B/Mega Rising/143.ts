import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sandygast"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [769],
	hp: 80,
	types: ["Fighting"],

	description: {
		'en-us': "It flings sand into the eyes of its prey and tries to\nclose in on them while they're blinded, but since\nSandygast is so slow, the prey tends to escape."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sand Attack"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card