import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgey"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "A common sight in forests and woods. It flaps\nits wings at ground level to kick up blinding sand."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flap"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card