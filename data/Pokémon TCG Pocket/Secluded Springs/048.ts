import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Seviper"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		en: "Constant polishing makes the edge of the blade on\nits tail extremely sharp. It's Zangoose's archrival."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fateful Fang"
		},

		damage: 40,
		cost: ["Darkness", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is Zangoose, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card