import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Ledian"
	},

	illustrator: "mashu",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Ledyba"
	},

	description: {
		en: "It flies through the night sky, sprinkling sparkly\ndust. According to some, if that dust sticks to\nyou, good things will happen to you."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Swift"
		},

		damage: 40,
		cost: ["Colorless"],

		effect: {
			en: "This attack's damage isn't affected by Weakness or by any effects on your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card