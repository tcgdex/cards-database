import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeotto"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pidgey"
	},

	description: {
		en: "Very protective of its sprawling territorial area,\nthis Pokémon will fiercely peck at any intruder."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Speed Wing"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card