import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Barraskewda"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
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
			en: "Double-Edge"
		},

		damage: 80,
		cost: ["Water", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card