import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Yamask"
	},

	illustrator: "Aya Kusube",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [562],
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "The spirit of a person from a bygone age became\nthis Pokémon. It rambles through ruins, searching\nfor someone who knows its face."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mumble"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card