import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggcute"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Seed Bomb"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Though it may look like it's just a bunch of eggs, it's a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.",
	}
}

export default card
