import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [848],

	name: {
		en: "Toxel"
	},

	illustrator: "Taiga Kayama",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "This selfish, attention-seeking Pokémon stores\npoison and electricity in two different sacs inside\nits body."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Static Shock"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card