import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Magnemite"
	},

	illustrator: "Miki Tanaka",
	rarity: "None",
	category: "Pokemon",
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Lightning Ball"
		},

		cost: ["Lightning"],
		damage: 20
	}],

	hp: 60,

	description: {
		en: "The electromagnetic waves emitted by the units<br />at the sides of its head expel antigravity, which<br />allows it to float."
	},

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card