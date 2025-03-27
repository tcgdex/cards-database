import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Flamigo"
	},

	illustrator: "REND",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "This Pokémon apparently ties the base of its neck into a knot so that energy stored in its belly does not escape from its beak."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Kick"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "Flip 2 coins. This attack does 50 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card