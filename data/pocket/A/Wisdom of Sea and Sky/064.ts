import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [170],
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "Its antennae, which evolved from a fin, have both\npositive and negative charges flowing through them.",
		'fr-fr': "Ses antennes proviennent d'anciennes nageoires et sont chargées d'énergies positive et négative."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Lightning Ball",
			'fr-fr': "Boule Éclair"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card