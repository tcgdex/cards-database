import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Eiscue"
	},

	illustrator: "Mékayu",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [875],
	hp: 80,
	types: ["Water"],

	description: {
		en: "If you lick the ice covering its face, you'll find it\nhas a faintly salty taste. This species rode here on\nocean currents from a cold, faraway land."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ice Face"
		},

		effect: {
			en: "If this Pokémon has full HP, it takes −40 damage from attacks from your opponent's Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Ram"
		},

		damage: 50,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card