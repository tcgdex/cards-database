import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Marowak"
	},

	illustrator: "Gemi",
	rarity: "One Star",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		en: "Cubone"
	},

	description: {
		en: "This Pokémon sets the bone it holds on fire and dances through the night as a way to mourn its fallen allies."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Burning Bonemerang"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 70 damage for each heads. If at least 1 of them is heads, your opponent's Active Pokémon is now Burned."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card