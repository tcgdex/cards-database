import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Skrelp",
		fr: "Venalgue"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [690],
	hp: 50,
	types: ["Darkness"],

	description: {
		en: "Skrelp evades its enemies by hiding amid\ndrifting seaweed. It eats rotten seaweed to\ncreate its poison.",
		fr: "Il dissimule sa présence en se mêlant aux algues qui flottent à la surface et mange celles qui sont en décomposition pour en faire du poison."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Melt",
			fr: "Dissolution"
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