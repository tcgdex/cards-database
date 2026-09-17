import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Bulbasaur"
	},

	illustrator: "Narumi Sato",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		en: "There is a plant seed on its back right from the\nday this Pokémon is born. The seed slowly\ngrows larger."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Vine Whip"
		},

		damage: 40,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card