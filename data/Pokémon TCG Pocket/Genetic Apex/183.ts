import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dratini"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			en: "Ram"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It sheds many layers of skin as it grows larger. During this process, it is protected by a rapid waterfall.",
	}
}

export default card
