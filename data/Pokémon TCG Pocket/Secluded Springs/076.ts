import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Phanpy"
	},

	illustrator: "OKACHEKE",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "This Pokémon lives and nests on a riverbank.\nAfter playing in the mud, it won't be able to\nsettle down unless it washes its body."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flail"
		},

		cost: ["Fighting"],

		effect: {
			en: "This attack does damage to your opponent's Active Pokémon equal to the damage this Pokémon has on it."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card