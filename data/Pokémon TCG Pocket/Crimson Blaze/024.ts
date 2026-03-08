import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Magnemite"
	},

	illustrator: "Hajime Kusajima",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		en: "The electromagnetic waves emitted by the units\nat the sides of its head expel antigravity, which\nallows it to float."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Electro Ball"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card