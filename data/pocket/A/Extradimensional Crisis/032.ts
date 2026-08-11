import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot"
	},

	illustrator: "match",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [744],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon is very friendly when it's young.\nIts disposition becomes vicious once it matures,\nbut it never forgets the kindness of its master.",
		'fr-fr': "Ce Pokémon est très amical lorsqu'il est jeune. il devient plus féroce avec le temps, mais sa loyauté envers son Dresseur reste infaillible."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rock Throw",
			'fr-fr': "Jet-Pierres"
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