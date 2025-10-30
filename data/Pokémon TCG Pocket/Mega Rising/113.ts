import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Gothorita"
	},

	illustrator: "sowsow",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Gothita"
	},

	description: {
		en: "Using its psychic power, it arranges pebbles to\nform the shapes of constellations. Some people\nbelieve this Pokémon came from outer space."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slap"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card