import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pangoro"
	},

	illustrator: "Uta",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [675],
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Pancham"
	},

	description: {
		'en-us': "Using its leaf, Pangoro can predict the moves of\nits opponents. It strikes with punches that can\nturn a dump truck into scrap with just one hit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Overdrive Smash"
		},

		damage: 30,
		cost: ["Darkness"],

		effect: {
			'en-us': "During your next turn, this Pokémon's Overdrive Smash attack does +30 damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card