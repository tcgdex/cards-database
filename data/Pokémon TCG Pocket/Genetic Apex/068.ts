import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Krabby"
	},

	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Vise Grip"
		},

		damage: "40"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
