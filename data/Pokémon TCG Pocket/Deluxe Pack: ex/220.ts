import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Rockruff"
	},

	illustrator: "match",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "This Pokémon is very friendly when it's young.\nIts disposition becomes vicious once it matures,\nbut it never forgets the kindness of its master."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rock Throw"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card