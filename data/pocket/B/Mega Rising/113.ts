import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gothorita"
	},

	illustrator: "sowsow",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [575],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Gothita"
	},

	description: {
		'en-us': "Using its psychic power, it arranges pebbles to\nform the shapes of constellations. Some people\nbelieve this Pokémon came from outer space."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slap"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card