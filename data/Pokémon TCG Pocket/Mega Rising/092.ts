import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Joltik"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		en: "Joltik can be found clinging to other Pokémon.\nIt's soaking up static electricity because it can't\nproduce a charge on its own."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Attach"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card