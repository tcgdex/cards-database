import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Absol"
	},

	illustrator: "kodama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		en: "Swift as the wind, Absol races through fields and\nmountains. Its curved, bow-like horn is acutely\nsensitive to the warning signs of natural disasters."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leap Over"
		},

		cost: ["Darkness"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card