import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggcute"
	},

	illustrator: "kawayoo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "Though it may look like it's just a bunch of eggs,\nit's a proper Pokémon. Exeggcute communicates\nwith others of its kind via telepathy, apparently."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Seed Bomb"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card