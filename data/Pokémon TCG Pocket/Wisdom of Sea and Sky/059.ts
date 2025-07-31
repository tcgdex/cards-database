import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Suicune"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		en: "It races around the world to purify fouled water.\nIt dashes away with the north wind."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cure Stream"
		},

		damage: 70,
		cost: ["Water", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card