import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Rockruff",
		fr: "Rocabot"
	},

	illustrator: "match",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "This Pokémon is very friendly when it's young.\nIts disposition becomes vicious once it matures,\nbut it never forgets the kindness of its master.",
		fr: "Ce Pokémon est très amical lorsqu'il est jeune. il devient plus féroce avec le temps, mais sa loyauté envers son Dresseur reste infaillible."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres"
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