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

	retreat: 0,
	rarity: "One Diamond"
}

export default card
