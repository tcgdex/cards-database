import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Tentacruel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Tentacool"
	},

	description: {
		en: "When the red orbs on Tentacruel's head glow\nbrightly, watch out. The Pokémon is about to\nfire off a burst of ultrasonic waves."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Stun Poison"
		},

		damage: 50,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned and Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card