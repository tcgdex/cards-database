import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Darkrai"
	},

	illustrator: "Uta",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		en: "It can lull people to sleep and make them dream.\nIt is active during nights of the new moon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Shadow Cage"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card