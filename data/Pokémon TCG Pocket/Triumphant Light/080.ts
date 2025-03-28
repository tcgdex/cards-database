import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Magnemite"
	},

	illustrator: "Yukihiro Tada",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		en: "The electromagnetic waves emitted by the units<br />at the sides of its head expel antigravity, which<br />allows it to float."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card