import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Solosis"
	},

	illustrator: "osare",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		en: "Many say that the special liquid covering this\nPokémon's body would allow it to survive in\nthe vacuum of space."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rollout"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card