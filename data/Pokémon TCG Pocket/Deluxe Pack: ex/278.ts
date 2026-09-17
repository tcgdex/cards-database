import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Jigglypuff"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "When its huge eyes waver, it sings a mysteriously\nsoothing melody that lulls its enemies to sleep."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pound"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card