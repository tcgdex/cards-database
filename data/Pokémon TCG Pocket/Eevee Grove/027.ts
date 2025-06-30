import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Galvantula"
	},

	illustrator: "otumami",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Joltik"
	},

	description: {
		en: "It launches electrified fur from its abdomen as its\nmeans of attack. Opponents hit by the fur could\nbe in for three full days and nights of paralysis."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electric Shock"
		},

		damage: 70,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "Discard all Energy attached to this Pokémon. Your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card