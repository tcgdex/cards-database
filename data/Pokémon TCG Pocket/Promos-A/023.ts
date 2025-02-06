import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Bulbasaur"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Vine Whip"
		},

		cost: ["Grass", "Colorless"],
		damage: 40
	}],

	hp: 70,

	description: {
		en: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
	},

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
