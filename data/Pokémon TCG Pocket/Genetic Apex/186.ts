import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgey"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gust"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	rarity: "One Diamond",

	description: {
		en: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
	}
}

export default card
