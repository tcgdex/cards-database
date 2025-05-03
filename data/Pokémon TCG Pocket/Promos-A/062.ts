import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Farfetch'd"
	},

	illustrator: "Eri Yamaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leek Slap"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card