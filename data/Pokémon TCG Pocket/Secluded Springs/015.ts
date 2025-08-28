import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Tentacool"
	},

	illustrator: "Hajime Kusajima",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "Tentacool is not a particularly strong swimmer.\nIt drifts across the surface of shallow seas as it\nsearches for prey."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Sting"
		},

		damage: 20,
		cost: ["Water", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card