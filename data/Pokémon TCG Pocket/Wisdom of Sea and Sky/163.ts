import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Bellossom"
	},

	illustrator: "Yuka Tanaka",
	rarity: "One Star",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Gloom"
	},

	description: {
		en: "Plentiful in the tropics. When it dances, its petals\nrub together and make a pleasant ringing sound."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Petal Dance"
		},

		damage: 60,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Flip 3 coins. This attack does 60 damage for each heads. This Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card