import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Clobbopus"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Knuckle Punch"
		},

		damage: "30"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
