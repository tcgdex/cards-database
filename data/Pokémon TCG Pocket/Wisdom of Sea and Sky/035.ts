import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Darumaka"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		en: "It derives its power from fire burning inside\nits body. If the fire dwindles, this Pokémon will\nimmediately fall asleep."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flop"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card