import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Heatmor"
	},

	illustrator: "match",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		en: "There's a hole in its tail that allows it to draw in\nthe air it needs to keep its fire burning. If the\nhole gets blocked, this Pokémon will fall ill."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Roasting Heat"
		},

		damage: 30,
		cost: ["Fire", "Fire"],

		effect: {
			en: "If your opponent's Active Pokémon is Burned, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card