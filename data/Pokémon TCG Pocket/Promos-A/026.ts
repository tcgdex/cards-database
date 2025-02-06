import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "When it is angered, it immediately discharges the<br />energy stored in the pouches in its cheeks."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw"
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