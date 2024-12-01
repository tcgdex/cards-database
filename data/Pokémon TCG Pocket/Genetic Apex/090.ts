import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pyukumuku"
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rain Splash"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
