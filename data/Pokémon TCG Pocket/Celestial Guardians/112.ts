import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Absol"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		en: "Swift as the wind, Absol races through fields and mountains. Its curved, bow-like horn is acutely sensitive to the warning signs of natural disasters."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Unseen Claw"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card