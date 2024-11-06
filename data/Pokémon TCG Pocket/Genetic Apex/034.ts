import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon"
	},

	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Claws"
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "None"
}

export default card