import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Barraskewda"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Arrokuda"
	},

	description: {
		en: "It spins its tail fins to propel itself, surging\nforward at speeds of over 100 knots before\nramming prey and spearing into them."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Jet Headbutt"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card