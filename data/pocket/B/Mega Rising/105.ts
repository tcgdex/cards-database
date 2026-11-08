import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dusknoir"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [477],
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Dusclops"
	},

	description: {
		'en-us': "With the mouth on its belly, Dusknoir swallows its\ntarget whole. The soul is the only thing eaten—\nDusknoir disgorges the body before departing."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fade into Darkness"
		},

		effect: {
			'en-us': "When this Pokémon is Knocked Out, flip a coin. If heads, your opponent can't get any points for it."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Hammer In"
		},

		damage: 80,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card