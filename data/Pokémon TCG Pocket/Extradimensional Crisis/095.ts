import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgey"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "A common sight in forests and woods. It flaps<br />its wings at ground level to kick up blinding sand."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gust"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card