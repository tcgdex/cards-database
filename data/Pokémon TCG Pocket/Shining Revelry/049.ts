import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		en: "Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Confuse Ray"
		},

		damage: 20,
		cost: ["Darkness"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card