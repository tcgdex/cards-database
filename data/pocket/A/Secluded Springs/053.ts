import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Skrelp",
		'fr-fr': "Venalgue"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [690],
	hp: 50,
	types: ["Darkness"],

	description: {
		'en-us': "Skrelp evades its enemies by hiding amid\ndrifting seaweed. It eats rotten seaweed to\ncreate its poison.",
		'fr-fr': "Il dissimule sa présence en se mêlant aux algues qui flottent à la surface et mange celles qui sont en décomposition pour en faire du poison."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Melt",
			'fr-fr': "Dissolution"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card