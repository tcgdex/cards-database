import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Tauros ex"
	},

	illustrator: "Ounishi",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [128],
	hp: 140,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Wild Tackle"
		},

		damage: 90,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this Pokémon also does 30 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card