import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [89],

	name: {
		en: "Muk"
	},

	illustrator: "Scav",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Grimer"
	},

	description: {
		en: "They love to gather in smelly areas where sludge\naccumulates, making the stench around\nthem worse."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gunk Shot"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card