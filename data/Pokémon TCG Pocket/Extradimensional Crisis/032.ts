import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

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
		en: "This Pokémon is very friendly when it's young.<br />Its disposition becomes vicious once it matures,<br />but it never forgets the kindness of its master."
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