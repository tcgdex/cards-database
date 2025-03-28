import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Joltik"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		en: "Joltik can be found clinging to other Pokémon. It's soaking up static electricity because it can't produce a charge on its own."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bug Bite"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
