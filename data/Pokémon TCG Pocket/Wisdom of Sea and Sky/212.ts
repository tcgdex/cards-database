import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Yanma"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Its eyes can see 360 degrees without moving its\nhead. It won't miss prey—even those behind it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "U-turn"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card