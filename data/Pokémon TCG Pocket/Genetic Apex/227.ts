import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Bulbasaur"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Vine Whip"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star",

	description: {
		en: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
	}
}

export default card
