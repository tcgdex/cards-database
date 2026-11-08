import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Magnemite"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "The electromagnetic waves emitted by the units\nat the sides of its head expel antigravity, which\nallows it to float."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Lightning Ball"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card